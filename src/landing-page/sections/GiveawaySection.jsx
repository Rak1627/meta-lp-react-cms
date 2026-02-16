import PropTypes from 'prop-types'
import { Image } from '../../components/Image'
import { renderTextWithHighlights } from '../utils/renderTextWithHighlights'

export function GiveawaySection({ content }) {
  return (
    <section className="section section--tight giveawaySection">
      <div className="container">
        <h2 className="giveawayHeading">
          <span className="gradientText">
            {renderTextWithHighlights(content.heading)}
          </span>
        </h2>

        <div className="giveawayGrid">
          {content.prizes.map((prize) => (
            <div className="giveawayCard" key={prize.title}>
              <div className={`giveawayCard__image${prize.image === 'laptop1' ? ' giveawayCard__image--laptop' : ''}`}>
                <Image
                  src={prize.image}
                  alt={prize.alt}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="giveawayCard__title giveawayCard__title--alt">
                <span className="giveawayCard__titleMain">{prize.title}</span>
                <span className="giveawayCard__titleSub">{prize.description}</span>
              </h3>
            </div>
          ))}
        </div>
        <p className="giveawayNote">{renderTextWithHighlights(content.note)}</p>
      </div>
    </section>
  )
}

GiveawaySection.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
    prizes: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
}
