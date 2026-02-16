import PropTypes from 'prop-types'
import { ConverteAiV4Player } from '../../components/ConverteAiPlayers'
import { GetTicketButton } from '../components/GetTicketButton'

export function HeroSection({ heroPlayerId }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="pill pill--gradient">Stop Wasting Money on Agencies</div>
          <h1 className="hero__title">
           The client getting system that nobody was meant to leak
          </h1>
          <p className="hero__subtitle">
           
            The Secret <span className="text-gradient">Black Box </span> Behind Profitable Meta Ads
            
          </p>

          <div className="videoShell">
            <div className="videoShell__inner">
              <ConverteAiV4Player playerId={heroPlayerId} />
            </div>
          </div>

          <div className="heroBelowVideo">
            
            <p className="heroBelowVideo__join">
              For <span className="gradientText"> Operators</span> or <span className="gradientText">Founders</span> who are tired of
              feast‑or‑famine <span className="gradientText">clients.</span>
            </p>
            <GetTicketButton />
          </div>
        </div>
      </div>
    </section>
  )
}

HeroSection.propTypes = {
  heroPlayerId: PropTypes.string.isRequired,
}
