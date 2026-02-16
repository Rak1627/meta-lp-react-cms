import PropTypes from 'prop-types'

export function GuaranteeSection({ content }) {
  return (
    <section className="section section--tight guaranteeSection">
      <div className="container">
        <div className="guaranteeOuter">
          <div className="guaranteeInner">
            <h2 className="guaranteeTitle"> {content.title}</h2>
            <div className="guaranteeBody">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

GuaranteeSection.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}
