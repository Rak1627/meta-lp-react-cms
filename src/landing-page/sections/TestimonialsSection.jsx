import { useMemo, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

function TestimonialsMarquee({ images, reverse = false, duration, delay, onImageClick }) {
  const style = useMemo(() => {
    const baseStyle = { '--duration': duration }
    if (delay) {
      baseStyle['--delay'] = delay
    }
    return baseStyle
  }, [duration, delay])

  return (
    <div className="testimonialsMarquee">
      <ul
        className={`testimonialsTrack${reverse ? ' testimonialsTrack--reverse' : ''}`}
        style={style}
      >
        <li className="testimonialsGroup">
          {images.map((src) => (
            <button
              type="button"
              className="testimonialsTile testimonialsTile--button"
              key={src}
              onClick={() => onImageClick?.(src)}
              aria-label="Open testimonial image"
            >
              <img
                src={src}
                alt="Customer testimonial"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </li>
        <li className="testimonialsGroup" aria-hidden="true">
          {images.map((src) => (
            <button
              type="button"
              className="testimonialsTile testimonialsTile--button"
              key={`${src}-dup`}
              onClick={() => onImageClick?.(src)}
              aria-label="Open testimonial image"
            >
              <img
                src={src}
                alt="Customer testimonial"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </li>
      </ul>
    </div>
  )
}

export function TestimonialsSection({ rows }) {
  const allImages = useMemo(() => {
    const seen = new Set()
    const result = []
    rows.flat().forEach((src) => {
      if (seen.has(src)) return
      seen.add(src)
      result.push(src)
    })
    return result
  }, [rows])

  const [activeIndex, setActiveIndex] = useState(null)

  const openImage = useCallback(
    (src) => {
      const idx = allImages.indexOf(src)
      if (idx !== -1) setActiveIndex(idx)
    },
    [allImages]
  )

  const closeLightbox = useCallback(() => {
    setActiveIndex(null)
  }, [])

  const showLightbox = activeIndex !== null
  const currentSrc = showLightbox ? allImages[activeIndex] : null

  const goPrev = useCallback(() => {
    setActiveIndex((idx) => {
      if (idx === null) return idx
      return (idx - 1 + allImages.length) % allImages.length
    })
  }, [allImages.length])

  const goNext = useCallback(() => {
    setActiveIndex((idx) => {
      if (idx === null) return idx
      return (idx + 1) % allImages.length
    })
  }, [allImages.length])

  useEffect(() => {
    if (!showLightbox) return
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        closeLightbox()
      } else if (event.key === 'ArrowLeft') {
        goPrev()
      } else if (event.key === 'ArrowRight') {
        goNext()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [showLightbox, closeLightbox, goPrev, goNext])

  useEffect(() => {
    if (!showLightbox) return undefined
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [showLightbox])

  return (
    <section className="section testimonialsSection">
      <div className="container">
        <h2 className="testimonialsHeading"><span className='gradientText'> See What Regular People Are Getting With This System</span></h2>

        <div className="testimonialsRows">
          <TestimonialsMarquee images={rows[0]} duration="85s" onImageClick={openImage} />
          <TestimonialsMarquee images={rows[1]} reverse duration="90s" delay="-34s" onImageClick={openImage} />
        </div>
      </div>

      {showLightbox && currentSrc ? (
        <div className="testimonialsLightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <div className="testimonialsLightbox__inner" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="testimonialsLightbox__close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              ×
            </button>
            <div className="testimonialsLightbox__media">
              <button
                type="button"
                className="testimonialsLightbox__nav testimonialsLightbox__nav--prev"
                onClick={goPrev}
                aria-label="Previous image"
              >
                <span className="left-popup-arrow" aria-hidden="true"></span>
              </button>
              <img
                src={currentSrc}
                alt="Testimonial"
                loading="eager"
                decoding="async"
              />
              <button
                type="button"
                className="testimonialsLightbox__nav testimonialsLightbox__nav--next"
                onClick={goNext}
                aria-label="Next image"
              >
                <span className="right-popup-arrow" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

TestimonialsMarquee.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  reverse: PropTypes.bool,
  duration: PropTypes.string.isRequired,
  delay: PropTypes.string,
  onImageClick: PropTypes.func,
}

TestimonialsSection.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
}

