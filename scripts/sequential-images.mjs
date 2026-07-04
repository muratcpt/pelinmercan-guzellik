import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "public", "images");
fs.mkdirSync(OUT_DIR, { recursive: true });

const IMAGES = [
  { file: "hero-bg.jpg", w: 1440, h: 900, seed: 101, prompt: "luxury beauty salon interior soft pink cream elegant modern professional wide angle photography" },
  { file: "about-salon.jpg", w: 900, h: 1100, seed: 102, prompt: "professional beauty therapist applying eyelash extensions modern salon warm lighting photography" },
  { file: "service-hydrafacial.jpg", w: 700, h: 700, seed: 103, prompt: "hydrafacial skin treatment glowing healthy skin close up spa professional soft light photography" },
  { file: "service-ipek-kirpik.jpg", w: 700, h: 700, seed: 104, prompt: "beautiful eyes perfect eyelash extensions dramatic lashes close up macro beauty photography" },
  { file: "service-zayiflama.jpg", w: 700, h: 700, seed: 105, prompt: "body contouring slimming spa treatment professional device close up soft light photography" },
  { file: "service-kas.jpg", w: 700, h: 700, seed: 106, prompt: "perfectly shaped eyebrows brow lamination result close up natural beauty photography" },
  { file: "service-manikur.jpg", w: 700, h: 700, seed: 107, prompt: "gel manicure pastel pink nails elegant hands professional photography" },
  { file: "service-cilt-bakimi.jpg", w: 700, h: 700, seed: 108, prompt: "facial skincare treatment clean glowing skin spa professional close up photography" },
  { file: "testimonial-bg.jpg", w: 1200, h: 500, seed: 109, prompt: "soft pink powder abstract bokeh dreamy feminine minimal gradient background" },
  { file: "gallery-salon-oda.jpg", w: 700, h: 700, seed: 110, prompt: "modern beauty salon treatment room soft pink interior professional photography" },
  { file: "gallery-volume-kirpik.jpg", w: 700, h: 700, seed: 111, prompt: "volume eyelash extensions close up dramatic lashes beauty macro photography" },
  { file: "gallery-hydrafacial-uygulama.jpg", w: 700, h: 700, seed: 112, prompt: "hydrafacial device treatment being applied to face spa professional close up photography" },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function download(url, dest, attempt = 1) {
  const res = await fetch(url);
  const buf = Buffer.from(await res.arrayBuffer());
  const text = buf.slice(0, 200).toString("utf8").toLowerCase();
  if (buf.length < 10 * 1024 || text.includes("error") || text.includes("queue full")) {
    if (attempt <= 4) {
      console.log(`  retry ${attempt} for ${dest} (size=${buf.length})`);
      await sleep(4000);
      return download(url, dest, attempt + 1);
    }
    throw new Error(`Failed to fetch ${url} after retries`);
  }
  fs.writeFileSync(dest, buf);
  return buf.length;
}

for (const img of IMAGES) {
  const dest = path.join(OUT_DIR, img.file);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 20 * 1024) {
    console.log(`skip (exists) ${img.file}`);
    continue;
  }
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(img.prompt)}?width=${img.w}&height=${img.h}&model=flux&seed=${img.seed}&nologo=true`;
  process.stdout.write(`fetching ${img.file} ... `);
  try {
    const size = await download(url, dest);
    console.log(`ok (${(size / 1024).toFixed(0)} KB)`);
  } catch (e) {
    console.log(`FAILED: ${e.message}`);
  }
  await sleep(4000);
}

console.log("done");
