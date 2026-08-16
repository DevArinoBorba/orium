import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');
const logoPath = path.join(publicDir, 'assets/logo-horizontal.png');

async function main() {
  const image = sharp(logoPath);
  const metadata = await image.metadata();
  console.log('Metadata:', metadata);

  // Crop left icon
  const cropped = await sharp(logoPath)
    .extract({
      left: 0,
      top: 0,
      width: 130,
      height: 180,
    })
    .resize(192, 192, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'favicon.png'), cropped);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), cropped);
  fs.writeFileSync(path.join(publicDir, 'assets/orium-icon.png'), cropped);

  const ico32 = await sharp(cropped)
    .resize(32, 32)
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), ico32);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico32);

  console.log('SUCCESS: All favicons generated with Orium logo icon!');
}

main().catch(console.error);
