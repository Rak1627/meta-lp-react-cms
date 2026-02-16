import sharp from 'sharp'
import { readdirSync, existsSync, mkdirSync, statSync } from 'fs'
import { join, dirname, extname, basename } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')

const inputDir = join(projectRoot, 'public', 'images')
const outputDir = join(projectRoot, 'public', 'images', 'optimized')

// Responsive image sizes
const sizes = [400, 800, 1200, 1600]

// Quality settings
const WEBP_QUALITY = 85
const AVIF_QUALITY = 75
const JPEG_QUALITY = 85
const PNG_QUALITY = 90

// Check if input directory exists
if (!existsSync(inputDir)) {
  console.error('Error: public/images directory not found!')
  console.log('Please run: npm run download:images first\n')
  process.exit(1)
}

// Create output directory
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true })
  console.log('Created directory: public/images/optimized\n')
}

const files = readdirSync(inputDir).filter(file => {
  const filePath = join(inputDir, file)
  return statSync(filePath).isFile() && /\.(jpg|jpeg|png|webp)$/i.test(file)
})

if (files.length === 0) {
  console.error('Error: No images found in public/images/')
  console.log('Please run: npm run download:images first\n')
  process.exit(1)
}

console.log(`Found ${files.length} images to optimize\n`)
console.log('This may take a few minutes...\n')

let processedCount = 0
let totalFiles = 0

async function optimizeImage(file) {
  const inputPath = join(inputDir, file)
  const ext = extname(file)
  const name = basename(file, ext)

  try {
    const metadata = await sharp(inputPath).metadata()
    const isSmall = metadata.width <= 600 // For testimonials and small images

    // Generate responsive sizes
    for (const size of sizes) {
      // Skip if size is larger than original
      if (size > metadata.width) continue

      const outputFileName = `${name}-${size}w.webp`
      const outputPath = join(outputDir, outputFileName)

      await sharp(inputPath)
        .resize(size, null, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: WEBP_QUALITY })
        .toFile(outputPath)

      processedCount++
      console.log(`  ✓ Created: ${outputFileName}`)
    }

    // Generate AVIF (better compression)
    const avifFileName = `${name}.avif`
    const avifPath = join(outputDir, avifFileName)

    await sharp(inputPath)
      .avif({ quality: AVIF_QUALITY })
      .toFile(avifPath)

    processedCount++
    console.log(`  ✓ Created: ${avifFileName}`)

    // Also keep original WebP for fallback
    if (!file.endsWith('.webp')) {
      const webpFileName = `${name}.webp`
      const webpPath = join(outputDir, webpFileName)

      await sharp(inputPath)
        .webp({ quality: WEBP_QUALITY })
        .toFile(webpPath)

      processedCount++
      console.log(`  ✓ Created: ${webpFileName}`)
    }

    console.log()

  } catch (error) {
    console.error(`  ✗ Error processing ${file}: ${error.message}\n`)
  }
}

async function main() {
  const startTime = Date.now()

  for (const file of files) {
    console.log(`Processing: ${file}`)
    await optimizeImage(file)
    totalFiles++
  }

  const endTime = Date.now()
  const duration = ((endTime - startTime) / 1000).toFixed(2)

  console.log(`${'='.repeat(50)}`)
  console.log('Optimization Summary:')
  console.log(`✓ Original images: ${totalFiles}`)
  console.log(`✓ Optimized files created: ${processedCount}`)
  console.log(`✓ Duration: ${duration}s`)
  console.log(`✓ Output directory: public/images/optimized/`)
  console.log(`${'='.repeat(50)}\n`)
  console.log('Next step: Images are ready to use!')
  console.log('The Image component will automatically use them.\n')
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
