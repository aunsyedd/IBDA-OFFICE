import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const keys = [
  "jawazat",
  "absher",
  "qiwa",
  "muqeem",
  "commerce",
  "business-center",
  "zatca",
  "gosi",
  "mofa",
  "mudad",
  "spl",
  "balady",
  "tourism",
  "environment",
  "civil-defense",
  "sfda",
  "transport",
  "saso",
  "saip",
  "najiz",
  "health",
];

const src = path.join(__dirname, "../public/services/logos-grid.png");
const outDir = path.join(__dirname, "../public/services");

async function main() {
  const meta = await sharp(src).metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;

  const cols = 7;
  const rows = 3;
  const cellW = width / cols;
  const cellH = height / rows;

  for (let i = 0; i < keys.length; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cellLeft = col * cellW;
    const cellTop = row * cellH;
    const left = Math.round(cellLeft + cellW * 0.34);
    const top = Math.round(cellTop + cellH * 0.1);
    const cropW = Math.round(cellW * 0.58);
    const cropH = Math.round(cellH * 0.42);

    await sharp(src)
      .extract({
        left: Math.min(left, width - 1),
        top: Math.min(top, height - 1),
        width: Math.min(cropW, width - left),
        height: Math.min(cropH, height - top),
      })
      .trim({ threshold: 12 })
      .resize(240, 140, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(outDir, `${keys[i]}.png`));
  }

  console.log("Extracted", keys.length, "logos");
}

main().catch(console.error);
