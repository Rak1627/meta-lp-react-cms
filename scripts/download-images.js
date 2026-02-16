import { writeFileSync, mkdirSync, existsSync } from 'fs'
import https from 'https'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')

// All images to download
const images = [
  // Logo
  {
    url: 'https://framerusercontent.com/images/FgY6AB73WPLFwE1CBP5OWjeOb2I.png?scale-down-to=512&width=5111&height=1008',
    name: 'logo.png'
  },

  // Learn section - Day images
  {
    url: 'https://framerusercontent.com/images/zswQErvhf3Xepx9ZeGlHowCK9ts.webp?width=2941&height=1601',
    name: 'day1.webp'
  },
  {
    url: 'https://framerusercontent.com/images/hKED8vSoLzJAxfwBdmpbR3eZEMk.webp?width=2722&height=1528',
    name: 'day2.webp'
  },
  {
    url: 'https://framerusercontent.com/images/KvGvIuXi3hAHBtV4OJVCSWtb38.webp?width=2881&height=1271',
    name: 'day3.webp'
  },
  {
    url: 'https://framerusercontent.com/images/vXTc7JEJxS7WPG6LQKP2LV1mWh4.webp?width=1920&height=1080',
    name: 'day4.webp'
  },
  {
    url: 'https://framerusercontent.com/images/lrLLo7TxCfzSuFoWfNNqWcGtlEw.webp?width=1920&height=1080',
    name: 'day5.webp'
  },

  // Testimonials - Row 1
  {
    url: 'https://framerusercontent.com/images/fi15hgrQ8RRiGRchQPUI5z1MY.webp?width=500&height=500',
    name: 'testimonial-1.webp'
  },
  {
    url: 'https://framerusercontent.com/images/q7JPByXze9gb2Y6qQxLE8C0CE.webp?width=500&height=500',
    name: 'testimonial-2.webp'
  },
  {
    url: 'https://framerusercontent.com/images/JnrVW1JCagqIkxRoYMg5tyh89ZM.webp?width=500&height=500',
    name: 'testimonial-3.webp'
  },
  {
    url: 'https://framerusercontent.com/images/547auWNZebHznYUozLA9wSZ0eEM.webp?width=500&height=500',
    name: 'testimonial-4.webp'
  },
  {
    url: 'https://framerusercontent.com/images/sXkZesX8w7KkMrpnszlV3ywC44.webp?width=500&height=500',
    name: 'testimonial-5.webp'
  },
  {
    url: 'https://framerusercontent.com/images/9GdzFNVHrHbGuIc6aKCyRutPQ.webp?width=500&height=500',
    name: 'testimonial-6.webp'
  },

  // Testimonials - Row 2
  {
    url: 'https://framerusercontent.com/images/wfytZsbpO51Nsbjx4lZekoqUI.webp?width=500&height=500',
    name: 'testimonial-7.webp'
  },
  {
    url: 'https://framerusercontent.com/images/Ap8ezz6oJLzZQDGXZHFrdLCqAlE.webp?width=500&height=500',
    name: 'testimonial-8.webp'
  },
  {
    url: 'https://framerusercontent.com/images/I2dxpazwLZvwT4OMFHXq9boTbmk.webp?width=500&height=500',
    name: 'testimonial-9.webp'
  },
  {
    url: 'https://framerusercontent.com/images/4zSLWJycf4UMG7h6u6FuEe1PT8.webp?width=500&height=500',
    name: 'testimonial-10.webp'
  },
  {
    url: 'https://framerusercontent.com/images/F70wc9UNjd09tWFNgRawgDyaVg.webp?width=500&height=500',
    name: 'testimonial-11.webp'
  },
  {
    url: 'https://framerusercontent.com/images/VPYn1uTFNlhKaLKneAdVxbS4Dw.webp?width=500&height=500',
    name: 'testimonial-12.webp'
  },
  {
    url: 'https://framerusercontent.com/images/wmgesajcTTQOpypY2WvoY0sBdQ.webp?width=500&height=500',
    name: 'testimonial-13.webp'
  },

  // Giveaway section
  {
    url: 'https://framerusercontent.com/images/tvQN3TN3ABpBLKsf996xgkGR5NY.jpg?width=3840&height=2160',
    name: 'giveaway-miami.jpg'
  },
  {
    url: 'https://framerusercontent.com/images/mB62E1pQ72OwQYbTTDP2NdxPSyo.png?width=1000&height=1000',
    name: 'giveaway-setup.png'
  },
  {
    url: 'https://framerusercontent.com/images/3kdF6DQdkscylWUeTePdybl4.webp?width=1537&height=2318',
    name: 'giveaway-person.webp'
  },

  // Host section
  {
    url: 'https://framerusercontent.com/images/6uYfMbLfBOn0Yb3E8Okqd42k6I.webp?width=3024&height=4032',
    name: 'host.webp'
  },

  // Rock section
  {
    url: 'https://framerusercontent.com/images/aABHUG2bZoOMET3niXkrwf22Tig.webp?width=1537&height=2318',
    name: 'rock-person.webp'
  },

  // Trade section
  {
    url: 'https://framerusercontent.com/images/i6Y09WtVFql2So50DSctHa5Q3Lc.webp?width=1290&height=1601',
    name: 'trade-phone.webp'
  },

  // Why section
  {
    url: 'https://framerusercontent.com/images/obV4RjfiZ6cCF2N1uSJ9E6H6zM.jpg?width=1535&height=2316',
    name: 'why-person.jpg'
  },

  // Background image (CSS)
  {
    url: 'https://framerusercontent.com/images/ytrCi8LsIb0hTBYzIv6mL4p8.jpg?scale-down-to=1024&width=2160&height=3840',
    name: 'background.jpg'
  }
]

// Create directory if it doesn't exist
const imagesDir = join(projectRoot, 'public', 'images')
if (!existsSync(imagesDir)) {
  mkdirSync(imagesDir, { recursive: true })
  console.log('Created directory: public/images')
}

let downloadedCount = 0
let failedCount = 0

console.log(`Starting download of ${images.length} images...\n`)

// Download images
images.forEach(({ url, name }, index) => {
  const urlWithoutParams = url.split('?')[0]
  const finalUrl = urlWithoutParams

  https.get(finalUrl, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
      // Handle redirect
      https.get(res.headers.location, (redirectRes) => {
        handleResponse(redirectRes, name, index)
      }).on('error', (err) => handleError(err, name, index))
    } else {
      handleResponse(res, name, index)
    }
  }).on('error', (err) => handleError(err, name, index))
})

function handleResponse(res, name, index) {
  const chunks = []
  res.on('data', (chunk) => chunks.push(chunk))
  res.on('end', () => {
    const buffer = Buffer.concat(chunks)
    const filePath = join(imagesDir, name)
    writeFileSync(filePath, buffer)
    downloadedCount++
    console.log(`[${downloadedCount + failedCount}/${images.length}] ✓ Downloaded: ${name} (${(buffer.length / 1024).toFixed(2)} KB)`)

    if (downloadedCount + failedCount === images.length) {
      printSummary()
    }
  })
}

function handleError(err, name, index) {
  failedCount++
  console.error(`[${downloadedCount + failedCount}/${images.length}] ✗ Failed: ${name} - ${err.message}`)

  if (downloadedCount + failedCount === images.length) {
    printSummary()
  }
}

function printSummary() {
  console.log(`\n${'='.repeat(50)}`)
  console.log('Download Summary:')
  console.log(`✓ Successfully downloaded: ${downloadedCount}`)
  console.log(`✗ Failed: ${failedCount}`)
  console.log(`Total: ${images.length}`)
  console.log(`${'='.repeat(50)}\n`)

  if (downloadedCount > 0) {
    console.log('Images saved to: public/images/')
    console.log('\nNext step: Run optimization script')
    console.log('Command: npm run optimize:images\n')
  }
}
