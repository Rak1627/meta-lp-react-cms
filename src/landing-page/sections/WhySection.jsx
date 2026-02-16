import PropTypes from 'prop-types'
import { Image } from '../../components/Image'

export function WhySection({ content }) {
  return (
    <section className="section section--tight whySection">
      <div className="container">
        <div className="whyCard">
          <div className="whyGrid">
            <div className="whyCopy">
              <h2 className="whyTitle"><span className="gradientText"> {content.title}</span></h2>
              <div className="whyBody">
                {content.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="whyMedia">
              <div className="whyImage">
                <Image
                  src={content.image}
                  alt={content.imageAlt}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

WhySection.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
  }).isRequired,
}
