import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ensureScript } from '../lib/ensureScript'

const CONVERTE_ACCOUNT_ID = '501b61c5-4d51-4add-a51a-9e0cdc162cb7'

export function ConverteAiV4Player({ playerId }) {
  useEffect(() => {
    ensureScript(`https://scripts.converteai.net/${CONVERTE_ACCOUNT_ID}/players/${playerId}/v4/player.js`)
  }, [playerId])

  return (
    <vturb-smartplayer
      id={`vid-${playerId}`}
      style={{ display: 'block', margin: '0 auto', width: '100%' }}
    />
  )
}

export function ConverteAiLegacyPlayer({ playerId }) {
  useEffect(() => {
    ensureScript(`https://scripts.converteai.net/${CONVERTE_ACCOUNT_ID}/players/${playerId}/player.js`)
  }, [playerId])

  return (
    <div id={`vid_${playerId}`} className="videoLegacy">
      <img
        id={`thumb_${playerId}`}
        src={`https://images.converteai.net/${CONVERTE_ACCOUNT_ID}/players/${playerId}/thumbnail.jpg`}
        alt="thumbnail"
      />
      <div id={`backdrop_${playerId}`} className="videoLegacy__backdrop" />
    </div>
  )
}

ConverteAiV4Player.propTypes = {
  playerId: PropTypes.string.isRequired,
}

ConverteAiLegacyPlayer.propTypes = {
  playerId: PropTypes.string.isRequired,
}

