import PropTypes from 'prop-types'

const iconMap = {
  warning: '⚠️',
  money: '💰',
  gift: '🎁',
}

export function LimitedSection({ content }) {
  return (
    <section className="section section--tight limitedSection">
      <div className="container">
        <div className="limitedHeading">
          <h2 className="limitedTitle"><span className="gradientText"> {content.title}</span></h2>
          <div className="limitedLead">
            <p className="limitedLeadMuted">{content.lead}</p>
          </div>
        </div>

        <div className="limitedGrid">
          {content.cards.map((item) => (
            <div key={item.text} className="limitedCard">
              <div className="limitedCardIcon" aria-hidden="true">
                {iconMap[item.icon] ?? item.icon}
              </div>
              <p className="limitedCardText">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="limitedFooter">
          {content.footer.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

LimitedSection.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    lead: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    footer: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}
