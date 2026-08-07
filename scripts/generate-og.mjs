import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public");

const GREEN = "#00FF41";
const MINT = "#66FF99";
const TEXT = "#C9FFE0";

const logo = (scale) => `
  <g transform="translate(${600 - 16 * scale}, ${170 - 16 * scale}) scale(${scale})">
    <defs>
      <linearGradient id="g" x1="8" y1="8" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="${GREEN}"/>
        <stop offset="100%" stop-color="${MINT}"/>
      </linearGradient>
    </defs>
    <path d="M5 11 V5 H11" stroke="${GREEN}" stroke-width="1.5" fill="none"/>
    <path d="M21 5 H27 V11" stroke="${GREEN}" stroke-width="1.5" fill="none"/>
    <path d="M27 21 V27 H21" stroke="${GREEN}" stroke-width="1.5" fill="none"/>
    <path d="M11 27 H5 V21" stroke="${GREEN}" stroke-width="1.5" fill="none"/>
    <path d="M9.5 23.5 L16 8.5 L22.5 23.5" stroke="url(#g)" stroke-width="2" fill="none" stroke-linejoin="round"/>
    <path d="M12.75 18.75 H19.25" stroke="url(#g)" stroke-width="1.5" fill="none"/>
  </g>`;

const grid = () => {
  let lines = "";
  for (let x = 0; x <= 1200; x += 42) {
    lines += `<line x1="${x}" y1="0" x2="${x}" y2="630" stroke="${GREEN}" opacity="0.04"/>`;
  }
  for (let y = 0; y <= 630; y += 42) {
    lines += `<line x1="0" y1="${y}" x2="1200" y2="${y}" stroke="${GREEN}" opacity="0.04"/>`;
  }
  return lines;
};

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#000503"/>
  ${grid()}
  <ellipse cx="600" cy="300" rx="460" ry="320" fill="url(#glow)"/>
  <defs>
    <radialGradient id="glow">
      <stop offset="0%" stop-color="${GREEN}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="${GREEN}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect x="520" y="90" width="160" height="160" rx="24" fill="#020D08" stroke="${GREEN}" stroke-width="6"/>
  ${logo(4)}
  <text x="600" y="340" text-anchor="middle" font-size="84" font-weight="bold" fill="${TEXT}" font-family="DejaVu Sans, Arial, sans-serif">ausimnla</text>
  <text x="600" y="400" text-anchor="middle" font-size="34" letter-spacing="12" fill="${GREEN}" font-family="DejaVu Sans Mono, monospace">FRONTEND / UI DEVELOPER</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(path.join(outDir, "opengraph.png"));
console.log("generated public/opengraph.png");
