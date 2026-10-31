import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const photosDir = path.resolve('portfolio/agency/photos');
const files = fs.readdirSync(photosDir);

console.log('Optimizing images in:', photosDir);

async function run() {
  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = path.join(photosDir, file);
      const baseName = path.basename(file, '.png');
      const outputPath = path.join(photosDir, `${baseName}.webp`);

      const initialStat = fs.statSync(inputPath);
      
      await sharp(inputPath)
        .webp({ quality: 86, effort: 4 })
        .toFile(outputPath);

      const finalStat = fs.statSync(outputPath);
      const saved = ((initialStat.size - finalStat.size) / initialStat.size * 100).toFixed(1);
      console.log(`✓ ${file}: ${(initialStat.size / 1024 / 1024).toFixed(2)}MB -> ${(finalStat.size / 1024).toFixed(0)}KB (${saved}% reduction)`);
    }
  }
}

run().catch(console.error);
