import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * Optimized Image component with lazy loading, responsive sizes, and modern formats
 *
 * @example
 * // Basic usage
 * <Image src="day1" alt="Day 1 content" />
 *
 * // Priority image (above the fold)
 * <Image src="logo" alt="Logo" priority />
 *
 * // Custom sizes
 * <Image
 *   src="hero"
 *   alt="Hero image"
 *   sizes="(max-width: 768px) 100vw, 50vw"
 * />
 */
export function Image({
  src,  // Just filename without extension, e.g., "day1" or "logo"
  alt,
  className = '',
  sizes = '100vw',
  loading = 'lazy',
  priority = false,
  style = {}
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority) // Priority images load immediately
  const imgRef = useRef(null)

  useEffect(() => {
    if (priority) return // Skip observer for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '100px', // Start loading 100px before visible
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  const basePath = '/images/optimized'

  // Generate srcSet for responsive WebP images
  const webpSrcSet = `
    ${basePath}/${src}-400w.webp 400w,
    ${basePath}/${src}-800w.webp 800w,
    ${basePath}/${src}-1200w.webp 1200w,
    ${basePath}/${src}-1600w.webp 1600w
  `.trim()

  return (
    <div
      ref={imgRef}
      className={className}
      style={{
        background: isLoaded ? 'transparent' : '#f0f0f0',
        ...style
      }}
    >
      {isInView && (
        <picture>
          {/* Modern format - AVIF (best compression, ~30% smaller than WebP) */}
          <source
            srcSet={`${basePath}/${src}.avif`}
            type="image/avif"
          />

          {/* WebP with responsive sizes */}
          <source
            srcSet={webpSrcSet}
            sizes={sizes}
            type="image/webp"
          />

          {/* Fallback to WebP 800w */}
          <img
            src={`${basePath}/${src}-800w.webp`}
            alt={alt}
            loading={priority ? 'eager' : loading}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
              display: 'block',
              width: '100%',
              height: 'auto',
            }}
          />
        </picture>
      )}
    </div>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  sizes: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  priority: PropTypes.bool,
  style: PropTypes.object,
}
