import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

async function optimizeImages() {
  console.log("Analyzing and optimizing images...");

  // 1. Client logos
  const clientLogos = [
    { file: "src/assets/clients/ideal-alimentos.png", maxWidth: 300 },
    { file: "src/assets/clients/gcnet.png", maxWidth: 300 },
    { file: "src/assets/clients/tiradentes.png", maxWidth: 300 },
    { file: "src/assets/clients/brayan.png", maxWidth: 300 },
    { file: "src/assets/clients/domquintino.png", maxWidth: 300 },
    { file: "src/assets/clients/unifametro.png", maxWidth: 300 },
    { file: "src/assets/clients/unifanor.png", maxWidth: 300 },
    { file: "src/assets/betnacional.png", maxWidth: 300 },
    { file: "src/assets/pomar.png", maxWidth: 300 },
  ];

  for (const { file, maxWidth } of clientLogos) {
    if (fs.existsSync(file)) {
      const initialStat = fs.statSync(file);
      const meta = await sharp(file).metadata();
      const pipeline = sharp(file);
      if (meta.width && meta.width > maxWidth) {
        pipeline.resize({ width: maxWidth, withoutEnlargement: true });
      }
      const buffer = await pipeline.png({ quality: 85, compressionLevel: 9, effort: 7 }).toBuffer();
      fs.writeFileSync(file, buffer);
      const newStat = fs.statSync(file);
      console.log(`Optimized ${file}: ${(initialStat.size / 1024).toFixed(1)}KB -> ${(newStat.size / 1024).toFixed(1)}KB (-${(((initialStat.size - newStat.size) / initialStat.size) * 100).toFixed(0)}%)`);
    }
  }

  // 2. Large content photos (convert or optimize in place or webp)
  // Let's create webp versions of the hero-bus, busdoor, backbus
  const photos = [
    { file: "src/assets/hero-bus.jpg", maxWidth: 1600, quality: 82 },
    { file: "src/assets/busdoor.jpg", maxWidth: 1200, quality: 82 },
    { file: "src/assets/backbus.jpg", maxWidth: 1200, quality: 82 },
  ];

  for (const { file, maxWidth, quality } of photos) {
    if (fs.existsSync(file)) {
      const initialStat = fs.statSync(file);
      const meta = await sharp(file).metadata();
      const pipeline = sharp(file);
      if (meta.width && meta.width > maxWidth) {
        pipeline.resize({ width: maxWidth, withoutEnlargement: true });
      }
      // Re-save as optimized WebP
      const webpFile = file.replace(/\.jpg$/, ".webp");
      await pipeline.webp({ quality, effort: 6 }).toFile(webpFile);
      const webpStat = fs.statSync(webpFile);
      console.log(`Generated WebP ${webpFile}: ${(initialStat.size / 1024).toFixed(1)}KB (jpg) -> ${(webpStat.size / 1024).toFixed(1)}KB (webp) (-${(((initialStat.size - webpStat.size) / initialStat.size) * 100).toFixed(0)}%)`);
    }
  }

  // 3. OpenGraph preview image in public/
  const ogImage = "public/og-image.png";
  if (fs.existsSync(ogImage)) {
    const initialStat = fs.statSync(ogImage);
    const buffer = await sharp(ogImage)
      .resize({ width: 1200, height: 630, fit: "cover" })
      .png({ quality: 85, compressionLevel: 9, effort: 7 })
      .toBuffer();
    fs.writeFileSync(ogImage, buffer);
    const newStat = fs.statSync(ogImage);
    console.log(`Optimized ${ogImage}: ${(initialStat.size / 1024).toFixed(1)}KB -> ${(newStat.size / 1024).toFixed(1)}KB (-${(((initialStat.size - newStat.size) / initialStat.size) * 100).toFixed(0)}%)`);
  }

  console.log("Image optimization complete!");
}

optimizeImages().catch((err) => {
  console.error("Error optimizing images:", err);
  process.exit(1);
});
