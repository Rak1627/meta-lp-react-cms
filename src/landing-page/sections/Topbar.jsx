import PropTypes from 'prop-types'
import { Image } from '../../components/Image'
import { Countdown } from '../../components/Countdown'

export function Topbar({ logoUrl, earlybirdTargetIso }) {
  return (
    <header className="lp__topbar">
      <div className="container topbarInner">
        <Image
          className="lp__logo"
          src={logoUrl}
          alt="The Brand Scaling Bootcamp"
          priority
          sizes="(max-width: 768px) 200px, 300px"
        />
        <div className="topbarCountdown" aria-label="Earlybird countdown">
          <div className="topbarCountdown__label">Limited Time Offer:</div>
          <Countdown targetIso={earlybirdTargetIso} />
        </div>
      </div>
    </header>
  )
}

Topbar.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  earlybirdTargetIso: PropTypes.string.isRequired,
}

