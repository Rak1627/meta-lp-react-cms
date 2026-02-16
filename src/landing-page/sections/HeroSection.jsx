import PropTypes from 'prop-types'
import { ConverteAiV4Player } from '../../components/ConverteAiPlayers'
import { GetTicketButton } from '../components/GetTicketButton'
import { renderTextWithHighlights } from '../utils/renderTextWithHighlights'

export function HeroSection({ heroPlayerId, content }) {
  const playerId = content?.videoPlayerId || heroPlayerId

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="pill pill--gradient">{content.pill}</div>
          <h1 className="hero__title">{content.title}</h1>
          <p className="hero__subtitle">{renderTextWithHighlights(content.subtitle)}</p>

          <div className="videoShell">
            <div className="videoShell__inner">
              <ConverteAiV4Player playerId={playerId} />
            </div>
          </div>

          <div className="heroBelowVideo">
            <p className="heroBelowVideo__join">
              {renderTextWithHighlights(content.belowVideo)}
            </p>
            <GetTicketButton label={content.buttonLabel} />
          </div>
        </div>
      </div>
    </section>
  )
}

HeroSection.propTypes = {
  heroPlayerId: PropTypes.string,
  content: PropTypes.shape({
    videoPlayerId: PropTypes.string,
    pill: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    belowVideo: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string,
  }).isRequired,
}

HeroSection.defaultProps = {
  heroPlayerId: '',
}
