import json, wave, math, subprocess, sys, os
from PIL import Image, ImageDraw, ImageFont
import numpy as np

D = os.path.dirname(os.path.abspath(__file__))
W, H, SS, FPS = 1280, 720, 2, 24
LEAD, TAIL = 0.5, 0.8
FONT = "C:/Windows/Fonts/segoeui.ttf"
FONTB = "C:/Windows/Fonts/segoeuib.ttf"

WHITE = (244, 247, 250)
MUTED = (159, 179, 200)
GREEN = (61, 220, 151)
TEAL = (46, 196, 182)
AMBER = (255, 190, 11)
BLUE = (78, 168, 255)
CORAL = (255, 107, 107)
COPPER = (214, 130, 80)
SILVER = (190, 200, 210)
STEEL = (120, 135, 150)
DARK = (20, 38, 58)
PANEL = (24, 48, 72)

_fc = {}
def F(sz, b=False):
    k = (sz, b)
    if k not in _fc:
        _fc[k] = ImageFont.truetype(FONTB if b else FONT, int(sz * SS))
    return _fc[k]

def clamp(x, a=0.0, b=1.0):
    return max(a, min(b, x))

def ease(x):
    x = clamp(x)
    return 1 - (1 - x) ** 3

def pr(u, start, dur):
    """eased progress 0..1 of an element that starts at u=start and takes dur"""
    return ease((u - start) / dur)

def mkbg():
    ys = np.linspace(0, 1, H * SS)[:, None]
    xs = np.linspace(0, 1, W * SS)[None, :]
    t = clamp(0, 0, 1)
    a = np.array([11, 25, 41], float)
    b = np.array([14, 58, 62], float)
    mix = (0.6 * ys + 0.4 * xs)[..., None]
    arr = a * (1 - mix) + b * mix
    arr = np.concatenate([arr, np.full((H * SS, W * SS, 1), 255.0)], axis=2).astype(np.uint8)
    return Image.fromarray(arr, "RGBA")

class Cv:
    def __init__(s):
        s.im = Image.new("RGBA", (W * SS, H * SS), (0, 0, 0, 0))
        s.d = ImageDraw.Draw(s.im)
    @staticmethod
    def col(c, a=1.0):
        return (c[0], c[1], c[2], int(255 * clamp(a)))
    def rrect(s, x, y, w, h, r, fill=None, outline=None, ow=3, a=1.0):
        s.d.rounded_rectangle([x * SS, y * SS, (x + w) * SS, (y + h) * SS], radius=r * SS,
                              fill=s.col(fill, a) if fill else None,
                              outline=s.col(outline, a) if outline else None, width=int(ow * SS))
    def circle(s, cx, cy, r, fill=None, outline=None, ow=3, a=1.0):
        s.d.ellipse([(cx - r) * SS, (cy - r) * SS, (cx + r) * SS, (cy + r) * SS],
                    fill=s.col(fill, a) if fill else None,
                    outline=s.col(outline, a) if outline else None, width=int(ow * SS))
    def line(s, x1, y1, x2, y2, c, w=4, a=1.0):
        s.d.line([x1 * SS, y1 * SS, x2 * SS, y2 * SS], fill=s.col(c, a), width=int(w * SS))
    def poly(s, pts, fill, a=1.0):
        s.d.polygon([(x * SS, y * SS) for x, y in pts], fill=s.col(fill, a))
    def arc(s, cx, cy, r, a0, a1, c, w=8, a=1.0):
        s.d.arc([(cx - r) * SS, (cy - r) * SS, (cx + r) * SS, (cy + r) * SS], a0, a1, fill=s.col(c, a), width=int(w * SS))
    def text(s, x, y, t, sz, c=WHITE, a=1.0, b=False, anchor="mm"):
        s.d.text((x * SS, y * SS), t, font=F(sz, b), fill=s.col(c, a), anchor=anchor)
    def wrap(s, text, sz, maxw, b=False):
        words, lines, cur = text.split(), [], ""
        for w in words:
            t = (cur + " " + w).strip()
            if F(sz, b).getlength(t) / SS <= maxw:
                cur = t
            else:
                lines.append(cur); cur = w
        if cur:
            lines.append(cur)
        return lines
    def para(s, cx, y, text, sz, c=WHITE, a=1.0, b=False, maxw=400, lh=1.25):
        lines = s.wrap(text, sz, maxw, b)
        for i, l in enumerate(lines):
            s.text(cx, y + i * sz * lh, l, sz, c, a, b)
        return len(lines)
    def arrow(s, x1, y1, x2, y2, c, p=1.0, w=5, a=1.0):
        if p <= 0:
            return
        ex, ey = x1 + (x2 - x1) * p, y1 + (y2 - y1) * p
        s.line(x1, y1, ex, ey, c, w, a)
        ang = math.atan2(y2 - y1, x2 - x1)
        hl = 16
        s.poly([(ex, ey),
                (ex - hl * math.cos(ang - 0.45), ey - hl * math.sin(ang - 0.45)),
                (ex - hl * math.cos(ang + 0.45), ey - hl * math.sin(ang + 0.45))], c, a)
    def box(s, x, y, w, h, title, sub=None, c=GREEN, a=1.0, tsz=30, ssz=22, fill=PANEL):
        s.rrect(x, y, w, h, 18, fill=fill, outline=c, ow=4, a=a)
        if sub:
            s.text(x + w / 2, y + h * 0.36, title, tsz, WHITE, a, True)
            s.para(x + w / 2, y + h * 0.66, sub, ssz, MUTED, a, False, maxw=w - 30)
        else:
            s.text(x + w / 2, y + h / 2, title, tsz, WHITE, a, True)
    def battery(s, x, y, w, h, level, c=GREEN, a=1.0, ow=5):
        s.rrect(x, y, w, h, h * 0.16, fill=DARK, outline=WHITE, ow=ow, a=a)
        s.rrect(x + w, y + h * 0.3, max(6, w * 0.035), h * 0.4, 4, fill=WHITE, a=a)
        iw = (w - 2 * ow - 8) * clamp(level)
        if iw > 2:
            s.rrect(x + ow + 4, y + ow + 4, iw, h - 2 * ow - 8, h * 0.1, fill=c, a=a)
    def car(s, x, y, a=1.0, k=1.0):
        def P(px, py): return (x + px * k, y + py * k)
        s.rrect(*P(0, 42), 270 * k, 62 * k, 24 * k, fill=(70, 120, 190), a=a) if False else None
        s.d.rounded_rectangle([x * SS, (y + 42 * k) * SS, (x + 270 * k) * SS, (y + 104 * k) * SS],
                              radius=int(22 * k * SS), fill=s.col((70, 120, 190), a))
        s.poly([P(52, 44), P(86, 4), P(196, 4), P(232, 44)], (70, 120, 190), a)
        s.poly([P(68, 42), P(94, 12), P(136, 12), P(136, 42)], (170, 210, 245), a)
        s.poly([P(146, 42), P(146, 12), P(190, 12), P(214, 42)], (170, 210, 245), a)
        for wx in (62, 208):
            cx, cy = P(wx, 106)
            s.circle(cx, cy, 27 * k, fill=(20, 28, 40), outline=(190, 200, 210), ow=4, a=a)
            s.circle(cx, cy, 8 * k, fill=(190, 200, 210), a=a)
        bx, by = P(96, 86)
        s.rrect(bx, by, 80 * k, 16 * k, 4, fill=GREEN, outline=WHITE, ow=2, a=a)
    def bolt(s, cx, cy, sz, c=AMBER, a=1.0):
        pts = [(0, -1), (-0.55, 0.15), (-0.08, 0.15), (-0.35, 1), (0.55, -0.2), (0.08, -0.2), (0.35, -1)]
        s.poly([(cx + px * sz, cy + py * sz) for px, py in pts], c, a)
    def check(s, cx, cy, sz, c=GREEN, a=1.0):
        s.line(cx - sz, cy, cx - sz * 0.3, cy + sz * 0.7, c, 10, a)
        s.line(cx - sz * 0.3, cy + sz * 0.7, cx + sz, cy - sz * 0.7, c, 10, a)
    def mini(s, x, y, a=1.0, c=GREEN):
        s.battery(x, y, 54, 28, 0.75, c, a, ow=3)

# ---------------------------------------------------------------- scenes
def sc1(c, t, u):
    a = pr(u, 0.0, 0.1)
    c.text(640, 112, "Second life for EV batteries", 62, WHITE, a, True)
    c.text(640, 178, "Team 5  ·  Battery Monster  ·  Climathon 2026", 28, MUTED, pr(u, 0.12, 0.1))
    rot = t * 70
    for i in range(3):
        c.arc(640, 385, 135, rot + i * 120, rot + i * 120 + 80, TEAL, 10, pr(u, 0.2, 0.15))
    lv = 0.2 + 0.58 * clamp((t - 0.8) / 2.2)
    c.battery(520, 335, 240, 100, lv, GREEN, pr(u, 0.15, 0.15))
    c.text(640, 580, "give retired batteries another life", 30, TEAL, pr(u, 0.6, 0.2))

def sc2(c, t, u):
    c.text(640, 70, "1 · Retired, not dead", 38, TEAL, pr(u, 0, 0.08), True)
    c.car(110, 240, pr(u, 0.0, 0.1), 1.0)
    c.text(245, 400, "EV battery", 26, MUTED, pr(u, 0.05, 0.1))
    c.arrow(400, 328, 640, 328, TEAL, pr(u, 0.12, 0.12))
    lv = 1.0 - 0.25 * pr(u, 0.2, 0.3)
    c.battery(680, 250, 420, 160, lv, GREEN if lv < 0.95 else TEAL, pr(u, 0.1, 0.1))
    c.text(890, 215, "100% when new" if lv > 0.97 else "70–80% capacity left", 32, WHITE, pr(u, 0.1, 0.1), True)
    c.text(890, 450, "Too weak for driving", 32, CORAL, pr(u, 0.6, 0.1), True)
    c.text(890, 500, "Still useful for storage", 32, GREEN, pr(u, 0.8, 0.1), True)

def chip(c, x, y, w, h, text, col, a):
    c.rrect(x, y, w, h, 16, fill=PANEL, outline=None, a=a)
    c.rrect(x, y, 14, h, 6, fill=col, a=a)
    c.para(x + w / 2 + 8, y + h / 2 - 14, text, 28, WHITE, a, True, maxw=w - 70) if len(text) > 34 else c.text(x + w / 2 + 8, y + h / 2, text, 28, WHITE, a, True)

def sc3(c, t, u):
    c.text(640, 70, "2 · The problem in Latvia", 38, CORAL, pr(u, 0, 0.08), True)
    c.battery(110, 270, 280, 130, 0.7, AMBER, pr(u, 0, 0.1))
    c.text(250, 335, "?", 90, WHITE, pr(u, 0.05, 0.1), True)
    chip(c, 480, 150, 700, 100, "No clear place to take used EV batteries", CORAL, pr(u, 0.18, 0.1))
    chip(c, 480, 285, 700, 100, "Only a few packs retire each year  (≈80, estimate)", AMBER, pr(u, 0.45, 0.1))
    chip(c, 480, 420, 700, 100, "Nobody tests them or takes responsibility", CORAL, pr(u, 0.7, 0.1))

def sc4(c, t, u):
    c.text(640, 70, "3 · Our idea: a take-back and testing hub", 38, GREEN, pr(u, 0, 0.08), True)
    ah = pr(u, 0.05, 0.12)
    c.rrect(740, 150, 440, 330, 24, fill=PANEL, outline=GREEN, ow=5, a=ah)
    c.text(960, 205, "Take-back & test hub", 34, WHITE, ah, True)
    c.text(960, 245, "in Latvia", 26, MUTED, ah)
    for i, tx in enumerate(["Check health", "Test safety", "Sort the packs"]):
        c.text(960, 300 + i * 48, "•  " + tx, 28, WHITE, pr(u, 0.12 + i * 0.05, 0.1))
    names = [("Fleets & buses", 150), ("Car dismantlers", 270), ("Insurers (write-offs)", 390)]
    for i, (n, y) in enumerate(names):
        s0 = 0.42 + i * 0.1
        c.box(80, y, 300, 85, n, None, TEAL, pr(u, s0, 0.08), 26)
        p = pr(u, s0 + 0.05, 0.15)
        c.arrow(380, y + 42, 740, 315, TEAL, p, 4)
        if p >= 1:
            ph = ((t * 0.5 + i * 0.33) % 1.0)
            bx = 380 + (740 - 380) * ph - 27
            by = (y + 42) + (315 - (y + 42)) * ph - 14
            c.mini(bx, by, 0.95)
    k = pr(u, 0.82, 0.1)
    if k > 0:
        c.circle(1100, 430, 30, fill=DARK, outline=GREEN, ow=4, a=k)
        c.check(1100, 430, 14, GREEN, k)

def sc5(c, t, u):
    c.text(640, 70, "4 · Test, then sort every battery", 38, GREEN, pr(u, 0, 0.08), True)
    c.box(70, 245, 300, 150, "Test & grade", "health + safety", GREEN, pr(u, 0.0, 0.1), 32)
    for i, y in enumerate((120, 262, 404)):
        c.arrow(370, 320, 600, y + 60, MUTED, pr(u, 0.2 + i * 0.02, 0.1), 4)
    c.box(600, 120, 600, 120, "A · Second life  (~30%)", "Best packs, sold to ENGYcell for storage", GREEN, pr(u, 0.28, 0.12), 32)
    c.box(600, 262, 600, 120, "B · Take apart in Latvia", "Split into modules / smaller units", AMBER, pr(u, 0.62, 0.12), 32)
    c.box(600, 404, 600, 120, "C · Recycler in Poland", "What we can't process ourselves", BLUE, pr(u, 0.8, 0.12), 32)
    c.text(640, 555, "About 30% reused / 70% recycled = our starting hypothesis", 22, MUTED, pr(u, 0.9, 0.1))

def sc6(c, t, u):
    c.text(640, 70, "5 · The other ~70%: recycle and sell", 38, AMBER, pr(u, 0, 0.08), True)
    a1 = pr(u, 0.0, 0.1)
    c.battery(60, 300, 180, 90, 0.35, AMBER, a1)
    c.text(150, 430, "~70% of packs", 26, MUTED, a1)
    c.arrow(260, 345, 340, 345, MUTED, pr(u, 0.25, 0.06), 4)
    a2 = pr(u, 0.3, 0.1)
    c.rrect(345, 285, 210, 120, 18, fill=PANEL, outline=AMBER, ow=4, a=a2)
    c.text(450, 330, "Shred", 36, WHITE, a2, True)
    c.text(450, 372, "safely, mechanically", 20, MUTED, a2)
    outs = [("Copper", COPPER), ("Aluminium", SILVER), ("Steel", STEEL), ("Black mass", (30, 30, 36))]
    for i, (n, col) in enumerate(outs):
        s0 = 0.46 + i * 0.07
        a = pr(u, s0, 0.08)
        y = 150 + i * 92
        c.arrow(555, 345, 660, y + 36, MUTED, a, 3)
        c.rrect(660, y, 260, 72, 16, fill=col, outline=WHITE if n == "Black mass" else None, ow=2, a=a)
        c.text(790, y + 36, n, 30, WHITE, a, True)
    a3 = pr(u, 0.8, 0.1)
    for i, (n, col) in enumerate(outs):
        c.arrow(920, 186 + i * 92, 1010, 330, MUTED, a3, 3)
    c.rrect(1010, 270, 220, 130, 18, fill=PANEL, outline=BLUE, ow=4, a=a3)
    c.text(1120, 310, "Refiner", 34, WHITE, a3, True)
    c.para(1120, 345, "makes nickel, cobalt, lithium", 20, MUTED, a3, False, maxw=190)
    c.text(640, 585, "We sell metal fractions and black mass. We do not refine.", 24, MUTED, pr(u, 0.85, 0.1))

def sc7(c, t, u):
    c.text(640, 70, "6 · Second life: storage where the grid is weak", 38, GREEN, pr(u, 0, 0.08), True)
    # grid tower
    a0 = pr(u, 0.22, 0.1)
    c.line(110, 200, 110, 470, WHITE, 6, a0)
    c.line(60, 250, 160, 250, WHITE, 6, a0)
    c.line(75, 310, 145, 310, WHITE, 6, a0)
    c.text(110, 505, "Weak grid", 26, MUTED, a0)
    # storage container
    a1 = pr(u, 0.0, 0.15)
    c.rrect(430, 230, 330, 210, 18, fill=PANEL, outline=GREEN, ow=5, a=a1)
    for r in range(2):
        for k in range(3):
            c.battery(455 + k * 98, 262 + r * 80, 70, 40, 0.8, GREEN, a1, ow=3)
    c.text(595, 465, "Second-life storage unit", 24, WHITE, a1, True)
    # charger + vehicles
    a2 = pr(u, 0.3, 0.12)
    c.rrect(1000, 250, 90, 160, 16, fill=PANEL, outline=AMBER, ow=5, a=a2)
    c.bolt(1045, 330, 34, AMBER, a2)
    c.text(1045, 440, "EV chargers", 24, WHITE, a2, True)
    c.text(1045, 468, "and bus depots", 22, MUTED, a2)
    # flows
    charge = u < 0.78
    la = pr(u, 0.55, 0.1)
    if la > 0:
        fade = 1.0 if u < 0.8 else 0.45
        c.line(165, 330, 425, 330, TEAL, 5, la * fade)
        c.text(295, 295, "cheap power in", 24, TEAL, la * fade, True)
        for i in range(4):
            ph = (t * 0.7 + i / 4) % 1.0
            c.circle(165 + 260 * ph, 330, 9, fill=TEAL, a=la * fade)
        lb = pr(u, 0.8, 0.1)
        if lb > 0:
            c.line(765, 330, 995, 330, AMBER, 5, lb)
            c.text(880, 295, "released when needed", 20, AMBER, lb, True)
            for i in range(4):
                ph = (t * 0.7 + i / 4) % 1.0
                c.circle(765 + 230 * ph, 330, 9, fill=AMBER, a=lb)

def sc8(c, t, u):
    c.text(640, 70, "7 · One responsible partner", 38, TEAL, pr(u, 0, 0.08), True)
    cx, cy, RX, RY = 520, 330, 300, 190
    a = pr(u, 0.05, 0.12)
    c.d.ellipse([(cx - RX) * SS, (cy - RY) * SS, (cx + RX) * SS, (cy + RY) * SS], outline=c.col(MUTED, 0.5 * a), width=3 * SS)
    c.text(cx, cy - 14, "One partner for", 28, MUTED, a)
    c.text(cx, cy + 22, "safety, paperwork,", 30, WHITE, a, True)
    c.text(cx, cy + 58, "recycling", 30, WHITE, a, True)
    nodes = [("Use in the car", -90, TEAL, 0.25), ("Test & grade", 0, GREEN, 0.4), ("Reuse or recycle", 90, AMBER, 0.6), ("New batteries", 180, BLUE, 0.78)]
    for n, ang, col, s0 in nodes:
        pa = pr(u, s0, 0.1)
        x = cx + RX * math.cos(math.radians(ang))
        y = cy + RY * math.sin(math.radians(ang))
        w = 210
        c.rrect(x - w / 2, y - 30, w, 60, 28, fill=PANEL, outline=col, ow=4, a=pa)
        c.text(x, y, n, 25, WHITE, pa, True)
    ph = (t * 0.25) % 1.0
    ang = math.radians(-90 + 360 * ph)
    c.circle(cx + RX * math.cos(ang), cy + RY * math.sin(ang), 11, fill=GREEN, a=a)
    c.text(1085, 260, "Less waste", 32, GREEN, pr(u, 0.4, 0.1), True)
    c.text(1085, 320, "More reuse", 32, TEAL, pr(u, 0.6, 0.1), True)
    c.text(1085, 380, "Circular economy", 32, AMBER, pr(u, 0.8, 0.1), True)

def sc9(c, t, u):
    a = pr(u, 0.0, 0.15)
    c.text(640, 190, "We start small", 70, WHITE, a, True)
    c.text(640, 270, "a pilot, then grow", 38, TEAL, pr(u, 0.2, 0.15))
    for i, tx in enumerate(["A fleet that supplies packs", "ENGYcell for the best packs", "A recycler for the rest"]):
        c.text(640, 360 + i * 46, "•  " + tx, 28, WHITE, pr(u, 0.35 + i * 0.1, 0.1))
    c.text(640, 535, "Team 5  ·  Battery Monster", 40, GREEN, pr(u, 0.7, 0.12), True)
    c.battery(555, 570, 170, 30, 0.8, GREEN, pr(u, 0.75, 0.1), ow=3) if False else None

SCENES = [sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8, sc9]

# ---------------------------------------------------------------- audio
def read_wav(p):
    with wave.open(p, "rb") as w:
        return w.getparams(), w.readframes(w.getnframes())

def main(preview=False):
    narr = json.load(open(os.path.join(D, "narration.json"), encoding="utf-8"))
    parts = [read_wav(os.path.join(D, f"narr_{i+1:02d}.wav")) for i in range(len(narr))]
    params = parts[0][0]
    sr, ch, sw = params.framerate, params.nchannels, params.sampwidth
    fb = ch * sw
    durs, alens = [], []
    for (p, fr) in parts:
        al = len(fr) / fb / sr
        alens.append(al)
        durs.append(max(4.0, al + LEAD + TAIL))
    print("audio", [round(x, 1) for x in alens], "total", round(sum(durs), 1), flush=True)
    audio = bytearray()
    for (p, fr), d in zip(parts, durs):
        lead = bytes(int(LEAD * sr) * fb)
        body = lead + fr
        need = int(d * sr) * fb
        body = body + bytes(max(0, need - len(body)))
        audio += body[:need]
    wav_out = os.path.join(D, "narration_full.wav")
    with wave.open(wav_out, "wb") as w:
        w.setparams(params)
        w.writeframes(bytes(audio))

    bg = mkbg()
    bg_small = bg.resize((W, H), Image.LANCZOS).convert("RGB")
    out = os.path.join(D, "preview.mp4" if preview else "concept.mp4")
    cmd = ["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
           "-r", str(FPS), "-i", "-", "-i", wav_out, "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "20",
           "-preset", "medium", "-c:a", "aac", "-b:a", "160k", "-shortest", out]
    ff = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    for si, (fn, d, al, text) in enumerate(zip(SCENES, durs, alens, narr)):
        n = int(round(d * FPS))
        print("scene", si + 1, n, "frames", flush=True)
        for fi in range(n):
            t = fi / FPS
            u = clamp((t - LEAD) / al)
            c = Cv()
            fn(c, t, u)
            # subtitles
            sa = clamp((t - 0.2) / 0.3)
            lines = c.wrap(text, 24, 1060)
            hh = 22 + len(lines) * 31
            top = 706 - hh
            c.rrect(90, top, 1100, hh, 14, fill=(8, 16, 28), a=0.78 * sa)
            for li, l in enumerate(lines):
                c.text(640, top + 24 + li * 31, l, 24, WHITE, sa)
            frame = Image.alpha_composite(bg, c.im).resize((W, H), Image.LANCZOS).convert("RGB")
            f = min(1.0, t / 0.35, (d - t) / 0.35)
            if f < 1.0:
                frame = Image.blend(bg_small, frame, clamp(f))
            ff.stdin.write(frame.tobytes())
            if preview and fi == int(n * 0.9):
                frame.save(os.path.join(D, f"frame_s{si+1}.png"))
    ff.stdin.close()
    ff.wait()
    print("done", out, flush=True)

if __name__ == "__main__":
    main(preview=len(sys.argv) > 1 and sys.argv[1] == "preview")
