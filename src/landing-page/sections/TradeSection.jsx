import PropTypes from 'prop-types'
import { Image } from '../../components/Image'
import { renderTextWithHighlights } from '../utils/renderTextWithHighlights'

export function TradeSection({ content }) {
  return (
    <section className="section tradeSection">
      <div className="container">
        <div className="tradeOuter">
          <div className="tradeInner">
            <div className="tradeCopy">
              <h2 className="tradeTitle">{content.title}</h2>
              <p className="tradeSubtitle">{content.subtitle}</p>

              <ul className="tradeList">
                {content.bullets.map((bullet) => (
                  <li key={bullet}>{renderTextWithHighlights(bullet)}</li>
                ))}
              </ul>

              <p className="tradeBottom tradeBottom--strong">
                {renderTextWithHighlights(content.bottomStrong)}
              </p>
              <p className="tradeBottom">{renderTextWithHighlights(content.bottom)}</p>
            </div>

            <div className="tradeMedia" aria-hidden="true">
              <Image
                src={content.image}
                alt="Phone with trading app"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

TradeSection.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    bottomStrong: PropTypes.string.isRequired,
    bottom: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}
