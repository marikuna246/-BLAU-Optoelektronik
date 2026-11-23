// Rendert für jedes Produkt 36 Bilder (alle 10°) aus den 3D-Modellen in _build/render-360.html
// und legt sie unter assets/360/<produkt>/1.jpg … 36.jpg ab. Danach: node _build/add-spin.js
// Voraussetzung: Vorschau-Server läuft (http://localhost:8771) und Google Chrome ist installiert.
// Aufruf: node Website_Redesign/_build/render-360.js [produkt …]
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const os = require("os");
const root = path.resolve(__dirname, "..");
const BASE = process.env.BASE || "http://localhost:8771";
const N = 36;
const ALL = ["mvnano", "mvfemto", "mvpico", "mvmicro", "mvpulse", "mvpulsehp", "mvgoldhp", "mvsquare", "linienlaser", "punktlaser", "doe"];
const list = process.argv.slice(2).length ? process.argv.slice(2) : ALL;
const CHROME = ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find((p) => fs.existsSync(p));
if (!CHROME) throw new Error("Chrome/Edge nicht gefunden");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const port = 9333, prof = fs.mkdtempSync(path.join(os.tmpdir(), "blau360-"));
  const ch = spawn(CHROME, ["--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${prof}`, "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--window-size=1200,900", "about:blank"], { stdio: "ignore" });
  let tab;
  for (let i = 0; i < 50 && !tab; i++) { try { tab = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === "page"); } catch { await sleep(200); } }
  if (!tab) throw new Error("Chrome startet nicht");
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener("open", r, { once: true }));
  let id = 0; const wait = new Map();
  ws.addEventListener("message", (e) => { const m = JSON.parse(e.data); if (m.id && wait.has(m.id)) { wait.get(m.id)(m); wait.delete(m.id); } });
  const cmd = (method, params = {}) => new Promise((r) => { const i = ++id; wait.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
  const evalJs = async (expr) => { const r = await cmd("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true }); if (r.result.exceptionDetails) throw new Error(JSON.stringify(r.result.exceptionDetails).slice(0, 300)); return r.result.result.value; };

  for (const p of list) {
    await cmd("Page.navigate", { url: `${BASE}/_build/render-360.html?p=${p}` });
    let ok = false;
    for (let i = 0; i < 100 && !ok; i++) { await sleep(150); try { ok = await evalJs("window.ready === true"); } catch {} }
    if (!ok) { console.warn("Modell lädt nicht:", p); continue; }
    const dir = path.join(root, "assets", "360", p); fs.mkdirSync(dir, { recursive: true });
    for (let i = 0; i < N; i++) {
      const url = await evalJs(`window.frame(${i}, ${N})`);
      fs.writeFileSync(path.join(dir, `${i + 1}.jpg`), Buffer.from(url.split(",")[1], "base64"));
    }
    console.log("gerendert:", p, N, "Bilder");
  }
  ws.close(); ch.kill();
  await sleep(500); try { fs.rmSync(prof, { recursive: true, force: true }); } catch {}
})().catch((e) => { console.error(e); process.exit(1); });
