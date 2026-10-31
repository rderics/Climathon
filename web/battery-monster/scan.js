// Battery Monster in 3D: an EV is scanned head to tail, the body dissolves, and the camera dives into the battery.
// Self playing timeline (no scroll). Illustration only: the cell data is made up. Procedural geometry, no external assets.
import * as THREE from './vendor/three.module.min.js';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canvas = document.getElementById('gl');
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

const T = 28; // loop length in seconds

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
renderer.localClippingEnabled = true;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050607);
scene.fog = new THREE.FogExp2(0x050607, 0.022);
const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 120);

// ---------- Studio environment ----------
{
  const env = new THREE.Scene();
  const box = (w, h, d, x, y, z, color, intensity) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity) }));
    m.position.set(x, y, z); env.add(m);
  };
  box(30, 0.5, 30, 0, 14, 0, 0xffffff, 1.4);
  box(0.5, 8, 20, -14, 5, 0, 0x7fffd0, 2.2);
  box(0.5, 8, 20, 14, 5, 0, 0xffc890, 2.4);
  box(20, 6, 0.5, 0, 4, -14, 0xffffff, 1.0);
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(env, 0.03).texture;
  pm.dispose();
}

// ---------- Lights ----------
const key = new THREE.DirectionalLight(0xfff1de, 2.4);
key.position.set(7, 12, 6);
key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
Object.assign(key.shadow.camera, { left: -10, right: 10, top: 10, bottom: -10, near: 1, far: 34 });
key.shadow.bias = -0.0004;
scene.add(key);
const rim = new THREE.PointLight(0x5fd08a, 120, 34, 2);
rim.position.set(-9, 3.5, -6);
scene.add(rim);
scene.add(new THREE.HemisphereLight(0x8fb8c8, 0x080a0c, 0.55));
const packFill = new THREE.PointLight(0xbfffe0, 0, 7, 2); packFill.position.set(0, 1.5, 0); scene.add(packFill);

// ---------- Materials ----------
const metalDark = new THREE.MeshStandardMaterial({ color: 0x2a2f36, metalness: 0.92, roughness: 0.38 });
const metalTray = new THREE.MeshStandardMaterial({ color: 0x1b1f25, metalness: 0.85, roughness: 0.5 });
const moduleMat = new THREE.MeshStandardMaterial({ color: 0x14171b, metalness: 0.3, roughness: 0.7 });
const cellMat = new THREE.MeshStandardMaterial({ color: 0x8a94a3, metalness: 1.0, roughness: 0.28 });
const orange = new THREE.MeshStandardMaterial({ color: 0xff7a1a, metalness: 0.1, roughness: 0.45 });

// ---------- Floor and glow pool ----------
const floor = new THREE.Mesh(new THREE.CircleGeometry(60, 64), new THREE.MeshStandardMaterial({ color: 0x0b0d0f, metalness: 0.35, roughness: 0.55 }));
floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true;
scene.add(floor);
{
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grd.addColorStop(0, 'rgba(95,208,138,0.5)'); grd.addColorStop(0.5, 'rgba(95,208,138,0.1)'); grd.addColorStop(1, 'rgba(95,208,138,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 256, 256);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const pool = new THREE.Mesh(new THREE.PlaneGeometry(26, 26), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.5 }));
  pool.rotation.x = -Math.PI / 2; pool.position.y = 0.01;
  scene.add(pool);
}

// =====================================================================
// THE CAR (stylised EV, procedural). Forward is +x. Clipped by a moving plane so it dissolves behind the scanner.
// =====================================================================
const clipPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 6); // keeps x >= -constant
const clip = [clipPlane];
const car = new THREE.Group();
scene.add(car);

const paint = new THREE.MeshPhysicalMaterial({ color: 0x3a4756, metalness: 0.7, roughness: 0.26, envMapIntensity: 1.9, clearcoat: 1, clearcoatRoughness: 0.1, clippingPlanes: clip, clipShadows: true });
const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x0b1620, metalness: 0.6, roughness: 0.05, envMapIntensity: 1.6, clearcoat: 1, clippingPlanes: clip, clipShadows: true });
const tyreMat = new THREE.MeshStandardMaterial({ color: 0x0b0c0e, metalness: 0.1, roughness: 0.85, clippingPlanes: clip });
const rimMat = new THREE.MeshStandardMaterial({ color: 0x9aa4b2, metalness: 1, roughness: 0.28, clippingPlanes: clip });
const lampF = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xcffff0).multiplyScalar(2.2), toneMapped: false, clippingPlanes: clip });
const lampR = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xff2a1a).multiplyScalar(1.6), toneMapped: false, clippingPlanes: clip });

// Body from a side profile extruded across the width
const prof = new THREE.Shape();
prof.moveTo(-4.0, 0.5);
prof.lineTo(-4.0, 1.15);
prof.quadraticCurveTo(-3.95, 1.45, -3.3, 1.6);
prof.bezierCurveTo(-2.3, 1.95, -1.2, 2.3, 0.1, 2.3);
prof.bezierCurveTo(1.3, 2.3, 2.2, 1.95, 3.0, 1.55);
prof.quadraticCurveTo(3.85, 1.35, 4.0, 0.95);
prof.lineTo(4.0, 0.6);
prof.quadraticCurveTo(3.95, 0.42, 3.7, 0.42);
prof.lineTo(-3.7, 0.42);
prof.quadraticCurveTo(-3.95, 0.42, -4.0, 0.5);
const bodyGeo = new THREE.ExtrudeGeometry(prof, { depth: 2.7, bevelEnabled: true, bevelSize: 0.16, bevelThickness: 0.2, bevelSegments: 6, curveSegments: 28 });
bodyGeo.translate(0, 0, -1.35);
const body = new THREE.Mesh(bodyGeo, paint);
body.castShadow = true; body.receiveShadow = true; car.add(body);

// Glass cabin
const cab = new THREE.Shape();
cab.moveTo(-2.9, 1.6);
cab.bezierCurveTo(-2.1, 1.95, -1.1, 2.33, 0.1, 2.34);
cab.bezierCurveTo(1.2, 2.33, 2.0, 1.95, 2.75, 1.6);
cab.lineTo(-2.9, 1.6);
const cabGeo = new THREE.ExtrudeGeometry(cab, { depth: 2.7, bevelEnabled: true, bevelSize: 0.2, bevelThickness: 0.2, bevelSegments: 5, curveSegments: 28 });
cabGeo.translate(0, 0, -1.35);
const cabin = new THREE.Mesh(cabGeo, glassMat);
cabin.position.y = 0.02; cabin.scale.set(1, 1, 1.02); car.add(cabin);

// Lamps
const headBar = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.1, 2.5), lampF);
headBar.position.set(4.18, 0.98, 0); car.add(headBar);
const tailBar = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.1, 2.5), lampR);
tailBar.position.set(-4.2, 1.18, 0); car.add(tailBar);

// Wheels
const tyreGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.5, 36); tyreGeo.rotateX(Math.PI / 2);
const rimGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.52, 28); rimGeo.rotateX(Math.PI / 2);
[[-2.55, 1.62], [-2.55, -1.62], [2.55, 1.62], [2.55, -1.62]].forEach(([x, z]) => {
  const w = new THREE.Group(); w.position.set(x, 0.55, z);
  const t = new THREE.Mesh(tyreGeo, tyreMat); t.castShadow = true; w.add(t);
  const r = new THREE.Mesh(rimGeo, rimMat); w.add(r);
  car.add(w);
});

// Hologram edge lines (not clipped, so the outline stays after the body dissolves)
const edgeMat = new THREE.LineBasicMaterial({ color: 0x5fd08a, transparent: true, opacity: 0.25, toneMapped: false, depthWrite: false });
const edges = new THREE.LineSegments(new THREE.EdgesGeometry(bodyGeo, 22), edgeMat);
car.add(edges);
const edges2 = new THREE.LineSegments(new THREE.EdgesGeometry(cabGeo, 22), edgeMat);
edges2.position.y = 0.02; car.add(edges2);

// =====================================================================
// THE BATTERY PACK (scaled down to sit under the floor)
// =====================================================================
const S = 0.72;
const packPos = new THREE.Vector3(0, 0.72, 0);
const pack = new THREE.Group();
pack.position.copy(packPos); pack.scale.setScalar(S);
scene.add(pack);
const L = 6, W = 3, WALL = 0.08;

[
  [L, 0.06, W, 0, -0.22, 0], [L, 0.5, WALL, 0, 0, W / 2 - WALL / 2], [L, 0.5, WALL, 0, 0, -W / 2 + WALL / 2],
  [WALL, 0.5, W, L / 2 - WALL / 2, 0, 0], [WALL, 0.5, W, -L / 2 + WALL / 2, 0, 0],
  [L + 0.2, 0.04, 0.16, 0, 0.23, W / 2 + 0.04], [L + 0.2, 0.04, 0.16, 0, 0.23, -W / 2 - 0.04],
  [0.16, 0.04, W + 0.2, L / 2 + 0.04, 0.23, 0], [0.16, 0.04, W + 0.2, -L / 2 - 0.04, 0.23, 0],
].forEach(([w, h, d, x, y, z]) => {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), metalTray);
  m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; pack.add(m);
});
{
  const g = new THREE.CylinderGeometry(0.05, 0.05, 0.05, 12);
  const pts = [];
  for (let i = 0; i < 12; i++) { const x = -L / 2 + 0.3 + i * ((L - 0.6) / 11); pts.push([x, 0.27, W / 2 + 0.04], [x, 0.27, -W / 2 - 0.04]); }
  const inst = new THREE.InstancedMesh(g, metalDark, pts.length);
  const m4 = new THREE.Matrix4();
  pts.forEach((p, i) => { m4.makeTranslation(p[0], p[1], p[2]); inst.setMatrixAt(i, m4); });
  pack.add(inst);
}
{
  const conn = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.3, 0.5), orange);
  conn.position.set(-L / 2 - 0.2, 0.0, 0.2); pack.add(conn);
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-L / 2 - 0.35, 0, 0.2), new THREE.Vector3(-L / 2 - 1.0, -0.05, 0.5),
    new THREE.Vector3(-L / 2 - 1.6, -0.15, 1.2), new THREE.Vector3(-L / 2 - 2.0, -0.2, 2.2),
  ]);
  pack.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.09, 12, false), orange));
}

const DENT = new THREE.Vector2(1.4, 0.55);
const CELLS_X = 5, CELLS_Z = 7, COLS = 6, ROWS = 2;
const cellCount = COLS * ROWS * CELLS_X * CELLS_Z;
const cells = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.075, 0.075, 0.22, 14), cellMat, cellCount);
const capGeo = new THREE.CircleGeometry(0.062, 14); capGeo.rotateX(-Math.PI / 2);
const capMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, toneMapped: false, depthWrite: false });
const caps = new THREE.InstancedMesh(capGeo, capMat, cellCount);
{
  const bodyG = new THREE.BoxGeometry(0.92, 0.2, 1.26);
  const m4 = new THREE.Matrix4(); const col = new THREE.Color();
  const cGreen = new THREE.Color(0x5fd08a), cAmber = new THREE.Color(0xf2c14e), cRed = new THREE.Color(0xff5a3c);
  let n = 0, seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const mx = -2.5 + c * 1.0, mz = r === 0 ? -0.7 : 0.7;
      const b = new THREE.Mesh(bodyG, moduleMat); b.position.set(mx, -0.16, mz); pack.add(b);
      for (let i = 0; i < CELLS_X; i++) {
        for (let j = 0; j < CELLS_Z; j++) {
          const x = mx + (i - (CELLS_X - 1) / 2) * 0.175, z = mz + (j - (CELLS_Z - 1) / 2) * 0.175;
          m4.makeTranslation(x, 0.0, z); cells.setMatrixAt(n, m4);
          m4.makeTranslation(x, 0.116, z); caps.setMatrixAt(n, m4);
          const d2 = (x - DENT.x) ** 2 + (z - DENT.y) ** 2;
          const h = clamp(1 - 1.15 * Math.exp(-d2 / (2 * 0.8 * 0.8)) + (rnd() - 0.5) * 0.12, 0, 1);
          if (h > 0.72) col.copy(cGreen); else if (h > 0.42) col.copy(cAmber).lerp(cGreen, smooth(0.42, 0.72, h)); else col.copy(cRed).lerp(cAmber, smooth(0.15, 0.42, h));
          caps.setColorAt(n, col); n++;
        }
      }
    }
  }
  pack.add(cells); caps.instanceColor.needsUpdate = true; pack.add(caps);
}

// Lid with dent and a scan reactive material (shader works in world space, so the pack scale is passed in)
const lidGroup = new THREE.Group();
pack.add(lidGroup);
const LID_Y = 0.31;
lidGroup.position.y = LID_Y;
const uni = {
  uScan: { value: -99 }, uScanOn: { value: 0 }, uDent: { value: new THREE.Vector2(DENT.x * S, DENT.y * S) },
  uHeat: { value: 0 }, uBand: { value: 5 / S }, uHeatK: { value: 1.7 / (S * S) },
};
{
  const geo = new THREE.BoxGeometry(L, 0.1, W, 150, 1, 75);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const dx = p.getX(i) - DENT.x, dz = p.getZ(i) - DENT.y, r2 = dx * dx + dz * dz;
    p.setY(i, p.getY(i) - 0.13 * Math.exp(-r2 / (2 * 0.42 * 0.42)) + 0.012 * Math.exp(-r2 / (2 * 0.9 * 0.9)) * Math.sin(dx * 13 + dz * 9));
  }
  geo.computeVertexNormals();
  const lidMat = new THREE.MeshStandardMaterial({ color: 0x3a4049, metalness: 0.95, roughness: 0.34 });
  lidMat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uni);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vW;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vW;\nuniform float uScan; uniform float uScanOn; uniform float uHeat; uniform float uBand; uniform float uHeatK; uniform vec2 uDent;')
      .replace('#include <emissivemap_fragment>',
        '#include <emissivemap_fragment>\n' +
        'float band = exp(-pow((vW.x - uScan) * uBand, 2.0));\n' +
        'float swept = step(vW.x, uScan) * uScanOn;\n' +
        'totalEmissiveRadiance += vec3(0.15, 1.0, 0.5) * (band * 1.7 + swept * 0.03);\n' +
        'float dd = distance(vW.xz, uDent);\n' +
        'float heat = exp(-dd * dd * uHeatK);\n' +
        'totalEmissiveRadiance += vec3(1.0, 0.28, 0.07) * heat * uHeat * 1.6;');
  };
  const lid = new THREE.Mesh(geo, lidMat); lid.castShadow = true; lid.receiveShadow = true; lidGroup.add(lid);
  [-0.9, 0, 0.9].forEach((z) => {
    if (Math.abs(z - DENT.y) > 0.5) { const rib = new THREE.Mesh(new THREE.BoxGeometry(L - 0.4, 0.035, 0.12), metalDark); rib.position.set(0, 0.065, z); lidGroup.add(rib); }
  });
  const badge = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.02, 0.35), new THREE.MeshStandardMaterial({ color: 0x5fd08a, metalness: 0.4, roughness: 0.35, emissive: 0x1c5a38, emissiveIntensity: 0.8 }));
  badge.position.set(-1.8, 0.07, -1.0); lidGroup.add(badge);
}

// Pack scan curtain, halo and lights live inside the pack so they share its scale
const curtainMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
  uniforms: { uOpacity: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: 'varying vec2 vUv; uniform float uOpacity; void main(){ float v = 1.0 - abs(vUv.y - 0.5) * 2.0; float edge = smoothstep(0.06, 0.0, abs(vUv.x - 0.5) - 0.44); float fl = smoothstep(0.05, 0.0, vUv.y); gl_FragColor = vec4(vec3(0.25, 1.0, 0.62), (v * v * 0.22 + edge * 0.5 + fl * 0.9) * uOpacity); }',
});
const curtain = new THREE.Mesh(new THREE.PlaneGeometry(W + 0.5, 1.5), curtainMat);
curtain.rotation.y = Math.PI / 2; curtain.position.y = 0.45; pack.add(curtain);
const haloMat = new THREE.MeshBasicMaterial({ color: 0xf2c14e, transparent: true, opacity: 0, toneMapped: false, depthWrite: false, blending: THREE.AdditiveBlending });
const halo = new THREE.Mesh(new THREE.TorusGeometry(4.1, 0.03, 8, 200), haloMat); halo.rotation.x = Math.PI / 2; halo.position.y = 0.05; pack.add(halo);
const halo2 = new THREE.Mesh(new THREE.TorusGeometry(4.7, 0.012, 8, 200), haloMat); halo2.rotation.x = Math.PI / 2; halo2.position.y = 0.05; pack.add(halo2);
const scanLight = new THREE.PointLight(0x5fffb0, 0, 6, 2); pack.add(scanLight);
const warmLight = new THREE.PointLight(0xff6a2a, 0, 4, 2); pack.add(warmLight);

// =====================================================================
// THE SCANNER ARCH (a gantry that sweeps the whole car)
// =====================================================================
const arch = new THREE.Group();
scene.add(arch);
const archMat = new THREE.MeshStandardMaterial({ color: 0x1a1d22, metalness: 0.9, roughness: 0.35, emissive: 0x1c7a4a, emissiveIntensity: 0.9 });
[-2.5, 2.5].forEach((z) => { const p = new THREE.Mesh(new THREE.BoxGeometry(0.16, 3.1, 0.22), archMat); p.position.set(0, 1.55, z); p.castShadow = true; arch.add(p); });
const beam = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 5.3), archMat); beam.position.set(0, 3.1, 0); arch.add(beam);
const archCurtainMat = curtainMat.clone();
archCurtainMat.uniforms = { uOpacity: { value: 0 } };
const archCurtain = new THREE.Mesh(new THREE.PlaneGeometry(5.0, 3.0), archCurtainMat);
archCurtain.rotation.y = Math.PI / 2; archCurtain.position.set(0, 1.55, 0); arch.add(archCurtain);
const archLight = new THREE.PointLight(0x5fffb0, 0, 14, 2); archLight.position.set(0, 1.8, 0); arch.add(archLight);

// Floating dust
const dust = (() => {
  const n = 420, pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { const r = 4 + Math.random() * 14, a = Math.random() * Math.PI * 2; pos[i * 3] = Math.cos(a) * r; pos[i * 3 + 1] = Math.random() * 7; pos[i * 3 + 2] = Math.sin(a) * r; }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(g, new THREE.PointsMaterial({ color: 0x9fe8c4, size: 0.05, transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending }));
  scene.add(pts); return pts;
})();

// =====================================================================
// TIMELINE
// =====================================================================
const knots = (arr, t) => {
  if (t <= arr[0][0]) return arr[0][1];
  for (let i = 0; i < arr.length - 1; i++) {
    const [t0, v0] = arr[i], [t1, v1] = arr[i + 1];
    if (t <= t1) return lerp(v0, v1, smooth(t0, t1, t));
  }
  return arr[arr.length - 1][1];
};
// Arch position along the car: sweep tail to nose, wait, then sweep back while the body re-forms
const archX = (t) => knots([[0, -7.2], [2.4, -7.2], [9.0, 7.2], [22.6, 7.2], [26.8, -7.2], [28, -7.2]], t);
// Pack story progress p (0..4) reuses the earlier chapter logic
const pAt = (t) => knots([[0, 0], [9.2, 0], [10.6, 0.8], [14.4, 1.9], [15.2, 2.0], [17.6, 2.8], [19.4, 3.3], [21.6, 4.0], [25.4, 4.0]], t);
const SHOTS = [
  { pos: [7.6, 5.2, 9.2], target: [0, 0.2, 0], fov: 32 },
  { pos: [-6.4, 3.1, 6.2], target: [0.4, 0.4, 0], fov: 34 },
  { pos: [0.6, 8.2, 3.4], target: [0, 0.1, 0], fov: 38 },
  { pos: [3.4, 2.7, 3.2], target: [1.4, 0.2, 0.5], fov: 30 },
  { pos: [6.2, 4.4, 8.8], target: [0, 0.5, 0], fov: 34 },
];
const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3(), tmpC = new THREE.Vector3();
function packShot(p, outPos, outTar) {
  const i = clamp(Math.floor(p), 0, SHOTS.length - 2), f = smooth(0, 1, clamp(p - i, 0, 1));
  const a = SHOTS[i], b = SHOTS[i + 1];
  outPos.set(...a.pos).lerp(tmpA.set(...b.pos), f).multiplyScalar(S).add(packPos);
  outTar.set(...a.target).lerp(tmpB.set(...b.target), f).multiplyScalar(S).add(packPos);
  return lerp(a.fov, b.fov, f);
}
const camPosCar = new THREE.Vector3(), camTarCar = new THREE.Vector3(), camPosPack = new THREE.Vector3(), camTarPack = new THREE.Vector3();
let portraitBoost = 1;
const ptr = { x: 0, y: 0, sx: 0, sy: 0 };

function updateWorld(t) {
  // ---- scanner arch and the dissolving body ----
  const ax = archX(t);
  clipPlane.constant = -ax;
  arch.position.x = ax;
  const moving = Math.abs(ax) < 7.0 ? 1 : 0;
  const archShow = smooth(2.2, 3.0, t) * (1 - smooth(9.2, 9.8, t)) + smooth(22.4, 23.0, t) * (1 - smooth(27.0, 27.6, t));
  arch.visible = archShow > 0.01;
  archCurtainMat.uniforms.uOpacity.value = archShow * moving;
  archLight.intensity = 60 * archShow;
  archMat.emissiveIntensity = 0.15 + 0.5 * archShow;
  packFill.intensity = 38 * smooth(5.0, 7.5, t) * (1 - smooth(22.5, 25, t));

  // ---- camera blend: orbit the car, then dive to the pack ----
  const m = smooth(8.6, 10.8, t) * (1 - smooth(23.0, 25.4, t));
  const a = 0.62 + 0.28 * Math.sin((2 * Math.PI * t) / T);
  const zoom = smooth(2, 8.5, t) - smooth(24, 27, t);
  const r = (16.5 - 4.5 * zoom) * portraitBoost, h = 6.6 - 3.2 * zoom;
  camPosCar.set(r * Math.sin(a) * 0.9, h, r * Math.cos(a));
  camTarCar.set(0, 1.1 - 0.4 * zoom, 0);
  const pPhase = t >= 25.4 ? 0 : pAt(t);
  const fovPack = packShot(pPhase, camPosPack, camTarPack);
  tmpC.copy(camPosPack).sub(camTarPack).multiplyScalar(portraitBoost).add(camTarPack);
  camera.position.copy(camPosCar).lerp(tmpC, m);
  tmpA.copy(camTarCar).lerp(camTarPack, m);
  camera.fov = lerp(34, fovPack, m) + (portraitBoost > 1 ? 4 : 0);
  camera.updateProjectionMatrix();
  camera.position.x += ptr.sx * 0.35; camera.position.y += -ptr.sy * 0.2;
  camera.lookAt(tmpA);

  // edge lines: strong while x-ray, faint when diving in
  edgeMat.opacity = lerp(0.22, 0.85, smooth(3, 8, t) * (1 - smooth(22.5, 26, t))) * (1 - 0.8 * m);

  // ---- pack effects (local coordinates) ----
  const p = pPhase;
  const scanOn = smooth(0.7, 0.95, p) * (1 - smooth(2.0, 2.15, p));
  const scanX = lerp(-3.6, 3.7, smooth(0.85, 1.9, p));
  uni.uScan.value = scanX * S + packPos.x; uni.uScanOn.value = smooth(0.8, 1.0, p) * (1 - smooth(2.3, 2.9, p));
  curtain.position.x = scanX; curtainMat.uniforms.uOpacity.value = scanOn;
  scanLight.position.set(scanX, 1.2, 0); scanLight.intensity = 26 * scanOn;
  const heat = smooth(1.55, 2.0, p) * (1 - 0.7 * smooth(2.6, 3.2, p)) * (1 - smooth(3.7, 4.0, p) * 0.2);
  uni.uHeat.value = heat * (0.85 + 0.15 * Math.sin(t * 3.0));
  warmLight.position.set(DENT.x, 0.9, DENT.y); warmLight.intensity = 14 * heat;
  const lift = smooth(2.0, 2.5, p) - smooth(3.65, 4.0, p);
  lidGroup.position.set(lerp(0, 2.2, lift), LID_Y + lift * 4.4, lerp(0, -2.6, lift));
  lidGroup.rotation.set(lift * 0.22, lift * 0.6, lift * -0.14);
  capMat.opacity = smooth(2.3, 2.95, p) * (1 - 0.7 * smooth(3.75, 4.0, p));
  const hv = smooth(3.55, 4.0, p);
  haloMat.opacity = 0.9 * hv;
  halo.scale.setScalar(lerp(0.7, 1, hv) + Math.sin(t * 1.4) * 0.01); halo2.scale.setScalar(lerp(0.6, 1, hv) + Math.sin(t * 1.4 + 1) * 0.015);
  rim.intensity = lerp(120, 170, hv);
}

// ---------- Captions ----------
const CAPS = [
  { a: 0, b: 2.4, e: 'AFTER A CRASH', t: 'Is the battery still good?', p: 'The most expensive part of an EV hides under the floor.' },
  { a: 2.4, b: 9.4, e: '1 · SCAN THE WHOLE CAR', t: 'The scanner arch sweeps head to tail.', p: 'The body dissolves and the battery appears.' },
  { a: 9.4, b: 14.2, e: '2 · SCAN THE CASING', t: 'Dents and heat show up in seconds.', p: 'The scan marks anything out of shape.' },
  { a: 14.2, b: 18.6, e: '3 · READ EVERY CELL', t: '420 cells. One health colour each.', p: "Voltage and temperature come from the car's own battery data." },
  { a: 18.6, b: 22.0, e: '4 · FIND THE WEAK ZONE', t: 'Cells near the impact stand out.', p: 'Amber and red cells sit right under the dent.' },
  { a: 22.0, b: 25.6, e: '5 · THE REPORT', t: 'Keep, repair or replace.', p: '', last: true },
  { a: 25.6, b: 28.01, e: 'BACK TO THE FULL CAR', t: 'Ready for the next one.', p: 'The loop restarts by itself.' },
];
const el = { cap: document.getElementById('cap'), eb: document.getElementById('eyebrow'), ti: document.getElementById('title'), bo: document.getElementById('body'), chips: document.getElementById('chips'), note: document.getElementById('note'), cta: document.getElementById('cta') };
let capIdx = -1;
function setCaption(t) {
  const i = CAPS.findIndex((c) => t >= c.a && t < c.b);
  if (i === capIdx || i < 0) return;
  capIdx = i;
  el.cap.classList.add('swap');
  setTimeout(() => {
    const c = CAPS[capIdx];
    el.eb.textContent = c.e; el.ti.textContent = c.t; el.bo.textContent = c.p; el.bo.style.display = c.p ? '' : 'none';
    el.chips.classList.toggle('show', !!c.last); el.note.classList.toggle('show', !!c.last); el.cta.hidden = !c.last;
    el.cap.classList.remove('swap');
  }, reduce ? 0 : 280);
}

// ---------- Controls ----------
const playBtn = document.getElementById('play'), restartBtn = document.getElementById('restart');
const seek = document.getElementById('seek'), timeEl = document.getElementById('time');
let time = reduce ? 12 : 0, playing = !reduce;
function syncUI() {
  seek.value = String(time); seek.style.setProperty('--fill', (time / T * 100).toFixed(2) + '%');
  const s = Math.floor(time); timeEl.textContent = '0:' + String(s).padStart(2, '0');
  playBtn.textContent = playing ? 'Pause' : 'Play'; playBtn.setAttribute('aria-label', playing ? 'Pause' : 'Play');
}
playBtn.addEventListener('click', () => { playing = !playing; syncUI(); });
restartBtn.addEventListener('click', () => { time = 0; playing = true; capIdx = -1; syncUI(); });
seek.addEventListener('input', () => { time = parseFloat(seek.value); capIdx = -1; syncUI(); });
addEventListener('keydown', (e) => { if (e.code === 'Space' && e.target === document.body) { e.preventDefault(); playing = !playing; syncUI(); } });

// ---------- Resize and pointer ----------
function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75));
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  portraitBoost = camera.aspect < 0.85 ? lerp(1.0, 1.7, clamp((0.85 - camera.aspect) / 0.45, 0, 1)) : 1;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize); resize();
if (!reduce && matchMedia('(pointer: fine)').matches) addEventListener('pointermove', (e) => { ptr.x = (e.clientX / innerWidth - 0.5) * 2; ptr.y = (e.clientY / innerHeight - 0.5) * 2; }, { passive: true });

// ---------- Loop ----------
const params = new URLSearchParams(location.search);
if (params.has('clean')) document.documentElement.classList.add('clean');
if (params.has('t')) { time = clamp(parseFloat(params.get('t')), 0, T); playing = false; }
const clock = new THREE.Clock();
let running = true;
document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) clock.getDelta(); });
syncUI();
function frame() {
  requestAnimationFrame(frame);
  if (!running) return;
  const dt = Math.min(clock.getDelta(), 1 / 30);
  if (playing) { time += dt; if (time >= T) { time -= T; capIdx = -1; } syncUI(); }
  ptr.sx += (ptr.x - ptr.sx) * (1 - Math.exp(-3 * dt)); ptr.sy += (ptr.y - ptr.sy) * (1 - Math.exp(-3 * dt));
  updateWorld(time);
  if (!reduce) { dust.rotation.y = clock.elapsedTime * 0.02; }
  renderer.render(scene, camera);
  setCaption(time);
}
frame();
window.__scan = { setT: (v) => { time = clamp(v, 0, T); playing = false; capIdx = -1; syncUI(); } };
