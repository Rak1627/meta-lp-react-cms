import { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

export function Countdown({ targetIso }) {
  const targetMs = useMemo(() => new Date(targetIso).getTime(), [targetIso])
  const [nowMs, setNowMs] = useState(() => Date.now())

  useEffect(() => {
    let mounted = true
    const id = window.setInterval(() => {
      if (mounted) {
        setNowMs(Date.now())
      }
    }, 1000)
    return () => {
      mounted = false
      window.clearInterval(id)
    }
  }, [])

  const diff = Math.max(0, targetMs - nowMs)
  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / (60 * 60 * 24))
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
  const seconds = totalSeconds % 60

  const pad2 = (n) => String(n).padStart(2, '0')

  return (
    <div className="countdown" aria-label="Countdown timer">
      <span className="countdown__num">{days}</span>
      <span className="countdown__label">D</span>
      <span className="countdown__num">{pad2(hours)}</span>
      <span className="countdown__label">H</span>
      <span className="countdown__num">{pad2(minutes)}</span>
      <span className="countdown__label">M</span>
      <span className="countdown__num">{pad2(seconds)}</span>
      <span className="countdown__label">S</span>
    </div>
  )
}

Countdown.propTypes = {
  targetIso: PropTypes.string.isRequired,
}

