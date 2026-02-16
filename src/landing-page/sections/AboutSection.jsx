import PropTypes from 'prop-types'
import { IconCalendar, IconPin, IconQuestionCircle } from '../../components/Icons'
import { renderTextWithHighlights } from '../utils/renderTextWithHighlights'

const iconMap = [IconQuestionCircle, IconPin, IconCalendar]

export function AboutSection({ content }) {
  return (
    <section className="section aboutSection">
      <div className="container">
        <h2 className="aboutHeading"><span className="gradientText">{content.heading}</span></h2>

        <div className="aboutGrid">
          {content.cards.map((card, index) => {
            const Icon = iconMap[index] ?? IconQuestionCircle
            return (
              <div key={card.label} className="aboutCard">
                <div className="aboutCard__head">
                  <Icon className="aboutCard__icon" />
                  <h3 style={{ margin: '0px' }} className="aboutCard__label">
                    <strong><span className="gradientText">{card.label}</span></strong>
                  </h3>
                </div>
                <p className="aboutCard__text">
                  {renderTextWithHighlights(card.text)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

AboutSection.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
}
