import PropTypes from 'prop-types'

export function HostSection({ content }) {
  return (
    <section className="section hostSection">
      <div className="container">
        <div className="hostCard">
          <div className="hostCard__inner">
            <div className="hostLayout">
              <h2 className="hostHeading"><span className="gradientText"> {content.heading}</span></h2>

              <div className="hostMedia">
                <img
                  className="hostImage"
                  src={content.image}
                  alt={content.imageAlt}
                  loading="lazy"
                />
              </div>

              <div className="hostCopy">
                {content.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <ul className="hostList">
                  {content.stuckBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p>{content.pivot}</p>

                <ul className="hostList">
                  {content.systemBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {content.outro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

HostSection.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    intro: PropTypes.arrayOf(PropTypes.string).isRequired,
    stuckBullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    pivot: PropTypes.string.isRequired,
    systemBullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    outro: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}
