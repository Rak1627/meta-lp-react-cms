import PropTypes from 'prop-types'
import { GetTicketButton } from '../components/GetTicketButton'
import { renderTextWithHighlights } from '../utils/renderTextWithHighlights'

export function BrandScalingSection({ content }) {
  return (
    <section className="brandScalingBg">
      <div className="container brandScalingWrap">
        <div className="brandScalingOuter">
          <div className="brandScalingInner">
            <div className="brandScalingQuote" aria-hidden="true">
              <span className="gradientText">&ldquo;</span>
            </div>

            <h2 className="brandScalingTitle">{renderTextWithHighlights(content.title)}</h2>

            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="brandScalingText">
                {renderTextWithHighlights(paragraph)}
              </p>
            ))}

            <p className="brandScalingHighlight">
              {renderTextWithHighlights(content.highlight)}
            </p>
            <p className="brandScalingText">{renderTextWithHighlights(content.footer)}</p>

            <GetTicketButton label={content.buttonLabel} />
          </div>
        </div>
      </div>
    </section>
  )
}

BrandScalingSection.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlight: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string,
  }).isRequired,
}
