// Battery Monster in 3D: one persistent Three.js world, driven by native page scroll.
// Illustration only: the cell data is made up. Procedural geometry, no external assets.
import * as THREE from './vendor/three.module.min.js';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canvas = document.getElementById('gl');
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const damp = (cur, tar, lambda, dt) => cur + (tar - cur) * (1 - Math.exp(-lambda * dt));

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
} catch (e) {
  document.documentElement.classList.add('no-gl');
  throw e;
}
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050607);
scene.fog = new THREE.FogExp2(0x050607, 0.032);
const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 80);

// ---------- Studio environment (softboxes baked to a PMREM map) ----------
{
  const env = new THREE.Scene();
  const box = (w, h, d, x, y, z, color, intensity) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity) }));
    m.position.set(x, y, z); env.add(m);
  };
  box(30, 0.5, 30, 0, 14, 0, 0xffffff, 1.4);      // top softbox
  box(0.5, 8, 20, -14, 5, 0, 0x7fffd0, 2.2);      // cool strip left
  box(0.5, 8, 20, 14, 5, 0, 0xffc890, 2.4);       // warm strip right
  box(20, 6, 0.5, 0, 4, -14, 0xffffff, 1.0);      // back
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(env, 0.03).texture;
  scene.environmentIntensity = 0.9;
  pm.dispose();
}

// ---------- Lights ----------
const key = new THREE.DirectionalLight(0xfff1de, 2.4);
key.position.set(5, 9, 4);
key.castShadow = true;
key.shadow.mapSize.set(1024, 1024);
key.shadow.camera.left = -7; key.shadow.camera.right = 7; key.shadow.camera.top = 7; key.shadow.camera.bottom = -7;
key.shadow.camera.near = 1; key.shadow.camera.far = 24;
key.shadow.bias = -0.0004;
scene.add(key);
const rim = new THREE.PointLight(0x5fd08a, 70, 22, 2);
rim.position.set(-6, 2.5, -4);
scene.add(rim);
const scanLight = new THREE.PointLight(0x5fffb0, 0, 9, 2);
scene.add(scanLight);
const warmLight = new THREE.PointLight(0xff6a2a, 0, 6, 2);
scene.add(warmLight);

// ---------- Materials ----------
const metalDark = new THREE.MeshStandardMaterial({ color: 0x2a2f36, metalness: 0.92, roughness: 0.38 });
const metalTray = new THREE.MeshStandardMaterial({ color: 0x1b1f25, metalness: 0.85, roughness: 0.5 });
const moduleMat = new THREE.MeshStandardMaterial({ color: 0x14171b, metalness: 0.3, roughness: 0.7 });
const cellMat = new THREE.MeshStandardMaterial({ color: 0x8a94a3, metalness: 1.0, roughness: 0.28 });
const orange = new THREE.MeshStandardMaterial({ color: 0xff7a1a, metalness: 0.1, roughness: 0.45 });

// ---------- Pack ----------
const pack = new THREE.Group();
scene.add(pack);
const L = 6, W = 3, WALL = 0.08;

// Tray: floor plus four walls and a flange, so the inside is visible when the lid lifts
const trayParts = [
  [L, 0.06, W, 0, -0.22, 0],
  [L, 0.5, WALL, 0, 0, W / 2 - WALL / 2],
  [L, 0.5, WALL, 0, 0, -W / 2 + WALL / 2],
  [WALL, 0.5, W, L / 2 - WALL / 2, 0, 0],
  [WALL, 0.5, W, -L / 2 + WALL / 2, 0, 0],
  [L + 0.2, 0.04, 0.16, 0, 0.23, W / 2 + 0.04],
  [L + 0.2, 0.04, 0.16, 0, 0.23, -W / 2 - 0.04],
  [0.16, 0.04, W + 0.2, L / 2 + 0.04, 0.23, 0],
  [0.16, 0.04, W + 0.2, -L / 2 - 0.04, 0.23, 0],
];
trayParts.forEach(([w, h, d, x, y, z]) => {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), metalTray);
  m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; pack.add(m);
});

// Bolts along the flange
{
  const g = new THREE.CylinderGeometry(0.05, 0.05, 0.05, 12);
  const pts = [];
  for (let i = 0; i < 12; i++) { const x = -L / 2 + 0.3 + i * ((L - 0.6) / 11); pts.push([x, 0.27, W / 2 + 0.04], [x, 0.27, -W / 2 - 0.04]); }
  const inst = new THREE.InstancedMesh(g, metalDark, pts.length);
  const m4 = new THREE.Matrix4();
  pts.forEach((p, i) => { m4.makeTranslation(p[0], p[1], p[2]); inst.setMatrixAt(i, m4); });
  pack.add(inst);
}

// High voltage cable and connector
{
  const conn = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.3, 0.5), orange);
  conn.position.set(-L / 2 - 0.2, 0.0, 0.2); conn.castShadow = true; pack.add(conn);
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-L / 2 - 0.35, 0, 0.2), new THREE.Vector3(-L / 2 - 1.0, -0.05, 0.5),
    new THREE.Vector3(-L / 2 - 1.6, -0.15, 1.2), new THREE.Vector3(-L / 2 - 2.0, -0.2, 2.2),
  ]);
  const cable = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.09, 12, false), orange);
  cable.castShadow = true; pack.add(cable);
}

// Modules and cells
const DENT = new THREE.Vector2(1.4, 0.55);
const CELLS_X = 5, CELLS_Z = 7, COLS = 6, ROWS = 2;
const cellCount = COLS * ROWS * CELLS_X * CELLS_Z;
const cellGeo = new THREE.CylinderGeometry(0.075, 0.075, 0.22, 14);
const cells = new THREE.InstancedMesh(cellGeo, cellMat, cellCount);
const capGeo = new THREE.CircleGeometry(0.062, 14);
capGeo.rotateX(-Math.PI / 2);
const capMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, toneMapped: false, depthWrite: false });
const caps = new THREE.InstancedMesh(capGeo, capMat, cellCount);
{
  const bodyGeo = new THREE.BoxGeometry(0.92, 0.2, 1.26);
  const m4 = new THREE.Matrix4();
  const col = new THREE.Color();
  const cGreen = new THREE.Color(0x5fd08a), cAmber = new THREE.Color(0xf2c14e), cRed = new THREE.Color(0xff5a3c);
  let n = 0;
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const mx = -2.5 + c * 1.0, mz = r === 0 ? -0.7 : 0.7;
      const body = new THREE.Mesh(bodyGeo, moduleMat);
      body.position.set(mx, -0.16, mz); body.receiveShadow = true; pack.add(body);
      for (let i = 0; i < CELLS_X; i++) {
        for (let j = 0; j < CELLS_Z; j++) {
          const x = mx + (i - (CELLS_X - 1) / 2) * 0.175, z = mz + (j - (CELLS_Z - 1) / 2) * 0.175;
          m4.makeTranslation(x, 0.0, z); cells.setMatrixAt(n, m4);
          m4.makeTranslation(x, 0.116, z); caps.setMatrixAt(n, m4);
          const d2 = (x - DENT.x) ** 2 + (z - DENT.y) ** 2;
          const h = clamp(1 - 1.15 * Math.exp(-d2 / (2 * 0.8 * 0.8)) + (rnd() - 0.5) * 0.12, 0, 1);
          if (h > 0.72) col.copy(cGreen); else if (h > 0.42) col.copy(cAmber).lerp(cGreen, smooth(0.42, 0.72, h)); else col.copy(cRed).lerp(cAmber, smooth(0.15, 0.42, h));
          caps.setColorAt(n, col);
          n++;
        }
      }
    }
  }
  cells.castShadow = true; pack.add(cells);
  caps.instanceColor.needsUpdate = true;
  pack.add(caps);
}

// Lid with a dent, ribs and a scan-reactive material
const lidGroup = new THREE.Group();
pack.add(lidGroup);
const LID_Y = 0.31;
lidGroup.position.y = LID_Y;
{
  const geo = new THREE.BoxGeometry(L, 0.1, W, 150, 1, 75);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i);
    const dx = x - DENT.x, dz = z - DENT.y;
    const r2 = dx * dx + dz * dz;
    const g = 0.13 * Math.exp(-r2 / (2 * 0.42 * 0.42));
    const wr = 0.012 * Math.exp(-r2 / (2 * 0.9 * 0.9)) * Math.sin(dx * 13 + dz * 9);
    p.setY(i, p.getY(i) - g + wr);
  }
  geo.computeVertexNormals();
  const uni = { uScan: { value: -9 }, uScanOn: { value: 0 }, uDent: { value: DENT.clone() }, uHeat: { value: 0 } };
  const lidMat = new THREE.MeshStandardMaterial({ color: 0x3a4049, metalness: 0.95, roughness: 0.34 });
  lidMat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uni);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vW;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vW;\nuniform float uScan; uniform float uScanOn; uniform float uHeat; uniform vec2 uDent;')
      .replace('#include <emissivemap_fragment>',
        '#include <emissivemap_fragment>\n' +
        'float band = exp(-pow((vW.x - uScan) * 5.0, 2.0));\n' +
        'float swept = step(vW.x, uScan) * uScanOn;\n' +
        'totalEmissiveRadiance += vec3(0.15, 1.0, 0.5) * (band * 1.7 + swept * 0.03);\n' +
        'float dd = distance(vW.xz, uDent);\n' +
        'float heat = exp(-dd * dd * 1.7);\n' +
        'totalEmissiveRadiance += vec3(1.0, 0.28, 0.07) * heat * uHeat * 1.6;');
  };
  const lid = new THREE.Mesh(geo, lidMat);
  lid.castShadow = true; lid.receiveShadow = true;
  lidGroup.add(lid);
  lidGroup.userData.uni = uni;
  // stiffening ribs
  [-0.9, 0, 0.9].forEach((z) => {
    const rib = new THREE.Mesh(new THREE.BoxGeometry(L - 0.4, 0.035, 0.12), metalDark);
    rib.position.set(0, 0.065, z);
    // follow the dent: skip ribs that cross it by raising none, they sit flat and the dent shows through
    if (Math.abs(z - DENT.y) > 0.5) lidGroup.add(rib);
  });
  // badge plate
  const badge = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.02, 0.35), new THREE.MeshStandardMaterial({ color: 0x5fd08a, metalness: 0.4, roughness: 0.35, emissive: 0x1c5a38, emissiveIntensity: 0.8 }));
  badge.position.set(-1.8, 0.07, -1.0); lidGroup.add(badge);
}
const uni = lidGroup.userData.uni;

// ---------- Floor, glow pool, scan curtain, halo, dust ----------
const floor = new THREE.Mesh(new THREE.CircleGeometry(40, 64), new THREE.MeshStandardMaterial({ color: 0x0b0d0f, metalness: 0.3, roughness: 0.62 }));
floor.rotation.x = -Math.PI / 2; floor.position.y = -0.27; floor.receiveShadow = true;
scene.add(floor);

{
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grd.addColorStop(0, 'rgba(95,208,138,0.55)'); grd.addColorStop(0.5, 'rgba(95,208,138,0.12)'); grd.addColorStop(1, 'rgba(95,208,138,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 256, 256);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const pool = new THREE.Mesh(new THREE.PlaneGeometry(13, 13), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.55 }));
  pool.rotation.x = -Math.PI / 2; pool.position.y = -0.255;
  scene.add(pool);
}

const curtainMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
  uniforms: { uOpacity: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: 'varying vec2 vUv; uniform float uOpacity; void main(){ float v = 1.0 - abs(vUv.y - 0.5) * 2.0; float edge = smoothstep(0.06, 0.0, abs(vUv.x - 0.5) - 0.44); float floorLine = smoothstep(0.05, 0.0, vUv.y); vec3 c = vec3(0.25, 1.0, 0.62); gl_FragColor = vec4(c, (v * v * 0.22 + edge * 0.5 + floorLine * 0.9) * uOpacity); }',
});
const curtain = new THREE.Mesh(new THREE.PlaneGeometry(W + 0.5, 1.5), curtainMat);
curtain.rotation.y = Math.PI / 2; curtain.position.y = 0.45;
scene.add(curtain);

const haloMat = new THREE.MeshBasicMaterial({ color: 0xf2c14e, transparent: true, opacity: 0, toneMapped: false, depthWrite: false, blending: THREE.AdditiveBlending });
const halo = new THREE.Mesh(new THREE.TorusGeometry(4.1, 0.03, 8, 200), haloMat);
halo.rotation.x = Math.PI / 2; halo.position.y = 0.05;
scene.add(halo);
const halo2 = new THREE.Mesh(new THREE.TorusGeometry(4.7, 0.012, 8, 200), haloMat);
halo2.rotation.x = Math.PI / 2; halo2.position.y = 0.05;
scene.add(halo2);

const dust = (() => {
  const n = 380, pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const r = 3 + Math.random() * 9, a = Math.random() * Math.PI * 2;
    pos[i * 3] = Math.cos(a) * r; pos[i * 3 + 1] = Math.random() * 6 - 0.2; pos[i * 3 + 2] = Math.sin(a) * r;
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(g, new THREE.PointsMaterial({ color: 0x9fe8c4, size: 0.035, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
  scene.add(pts); return pts;
})();

// ---------- Chapters: camera keyframes (desktop), world state is derived from p ----------
const SHOTS = [
  { pos: [7.6, 5.2, 9.2], target: [0, 0.2, 0], fov: 32 },
  { pos: [-6.4, 3.1, 6.2], target: [0.4, 0.4, 0], fov: 34 },
  { pos: [0.6, 8.2, 3.4], target: [0, 0.1, 0], fov: 38 },
  { pos: [3.4, 2.7, 3.2], target: [1.4, 0.2, 0.5], fov: 30 },
  { pos: [6.2, 4.4, 8.8], target: [0, 0.5, 0], fov: 34 },
];
const camPos = new THREE.Vector3(), camTar = new THREE.Vector3();
const A = new THREE.Vector3(), B = new THREE.Vector3();
let fovBase = 34, portraitBoost = 1;
function sampleCamera(p) {
  const i = clamp(Math.floor(p), 0, SHOTS.length - 2);
  const t = smooth(0, 1, clamp(p - i, 0, 1));
  const a = SHOTS[i], b = SHOTS[i + 1];
  camPos.set(...a.pos).lerp(A.set(...b.pos), t);
  camTar.set(...a.target).lerp(B.set(...b.target), t);
  fovBase = lerp(a.fov, b.fov, t);
}

// ---------- Scroll conductor (native scroll is the source of truth) ----------
const sections = [...document.querySelectorAll('.chap')];
const dots = [...document.querySelectorAll('.dots a')];
const hint = document.getElementById('hint');
const chips = [...document.querySelectorAll('.chip')];
const params = new URLSearchParams(location.search);
const forced = params.has('p') ? clamp(parseFloat(params.get('p')), 0, SHOTS.length - 1) : null;
let target = 0, cur = 0, lastChap = -1;
function readScroll() {
  const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  target = forced !== null ? forced : clamp(scrollY / max, 0, 1) * (SHOTS.length - 1);
}
addEventListener('scroll', readScroll, { passive: true });

const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }), { threshold: 0.25 });
sections.forEach((s) => io.observe(s));

// ---------- Resize ----------
function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75));
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  portraitBoost = camera.aspect < 0.85 ? lerp(1.0, 1.9, clamp((0.85 - camera.aspect) / 0.45, 0, 1)) : 1;
  camera.updateProjectionMatrix();
  readScroll();
}
addEventListener('resize', resize);
resize();

// ---------- Pointer parallax (desktop, not reduced motion) ----------
const ptr = { x: 0, y: 0, sx: 0, sy: 0 };
if (!reduce && matchMedia('(pointer: fine)').matches) {
  addEventListener('pointermove', (e) => { ptr.x = (e.clientX / innerWidth - 0.5) * 2; ptr.y = (e.clientY / innerHeight - 0.5) * 2; }, { passive: true });
}

// ---------- Render loop ----------
const clock = new THREE.Clock();
let running = true;
document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) clock.getDelta(); });
const lidRest = new THREE.Vector3(0, LID_Y, 0);

function updateWorld(p, t) {
  // Scan sweep across the lid in chapter 1
  const scanOn = smooth(0.7, 0.95, p) * (1 - smooth(2.0, 2.15, p));
  const scanX = lerp(-3.6, 3.7, smooth(0.85, 1.9, p));
  uni.uScan.value = scanX; uni.uScanOn.value = smooth(0.8, 1.0, p) * (1 - smooth(2.3, 2.9, p));
  curtain.position.x = scanX;
  curtainMat.uniforms.uOpacity.value = scanOn;
  scanLight.position.set(scanX, 1.2, 0); scanLight.intensity = 26 * scanOn;

  // Dent heat after the scan passes it
  const heat = smooth(1.55, 2.0, p) * (1 - 0.7 * smooth(2.6, 3.2, p)) * (1 - smooth(3.7, 4.0, p) * 0.2);
  uni.uHeat.value = heat * (0.85 + 0.15 * Math.sin(t * 3.0));
  warmLight.position.set(DENT.x, 0.9, DENT.y); warmLight.intensity = 14 * heat;

  // Lid lifts off to reveal the cells, then returns for the report
  const lift = smooth(2.0, 2.8, p) - smooth(3.65, 4.0, p);
  lidGroup.position.set(lerp(lidRest.x, 0.6, lift), lidRest.y + lift * 3.4, lerp(0, -0.4, lift));
  lidGroup.rotation.set(lift * 0.12, lift * 0.35, lift * -0.05);

  // Cells light up with their health colour
  capMat.opacity = smooth(2.3, 2.95, p) * (1 - 0.7 * smooth(3.75, 4.0, p));

  // Verdict halo
  const hv = smooth(3.55, 4.0, p);
  haloMat.opacity = 0.9 * hv;
  const hs = lerp(0.7, 1, hv) + Math.sin(t * 1.4) * 0.01;
  halo.scale.setScalar(hs); halo2.scale.setScalar(lerp(0.6, 1, hv) + Math.sin(t * 1.4 + 1) * 0.015);
  rim.intensity = lerp(70, 110, hv);
}

function frame() {
  requestAnimationFrame(frame);
  if (!running) return;
  const dt = Math.min(clock.getDelta(), 1 / 30);
  const t = clock.elapsedTime;
  cur = reduce || forced !== null ? target : damp(cur, target, 5.2, dt);

  sampleCamera(cur);
  ptr.sx = damp(ptr.sx, ptr.x, 3, dt); ptr.sy = damp(ptr.sy, ptr.y, 3, dt);
  const dir = A.copy(camPos).sub(camTar).multiplyScalar(portraitBoost);
  camera.position.copy(camTar).add(dir);
  camera.position.x += ptr.sx * 0.45; camera.position.y += -ptr.sy * 0.25;
  camera.fov = fovBase + (portraitBoost > 1 ? 4 : 0);
  camera.updateProjectionMatrix();
  camera.lookAt(camTar);

  updateWorld(cur, t);
  if (!reduce) { dust.rotation.y = t * 0.02; dust.position.y = Math.sin(t * 0.2) * 0.15; }

  renderer.render(scene, camera);

  const chap = clamp(Math.round(target), 0, SHOTS.length - 1);
  if (chap !== lastChap) {
    lastChap = chap;
    dots.forEach((d, i) => d.setAttribute('aria-current', i === chap ? 'true' : 'false'));
  }
  hint.classList.toggle('gone', target > 0.15);
}
frame();

// Test hook for screenshots: window.__scan.setP(2.4)
window.__scan = { setP: (v) => { target = cur = clamp(v, 0, SHOTS.length - 1); } };
