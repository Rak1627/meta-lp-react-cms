import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { IconX } from './Icons'

function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [locked])
}

function useEscapeToClose(enabled, onClose) {
  useEffect(() => {
    if (!enabled) return

    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [enabled, onClose])
}

export function TypeformModal({ open, title, formId, onClose }) {
  useBodyScrollLock(open)
  useEscapeToClose(open, onClose)

  if (!open) return null

  const src = `https://form.typeform.com/to/${formId}?typeform-medium=embed-snippet`

  return (
    <div
      className="modalOverlay"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        onClose()
      }}
    >
      <div className="modalCard" onClick={(event) => event.stopPropagation()}>
        <div className="modalHeader">
          <h3>{title}</h3>
          <button type="button" className="modalClose" onClick={onClose} aria-label="Close">
            <IconX style={{ width: 18, height: 18 }} />
          </button>
        </div>
        <iframe className="modalFrame" src={src} title={title} />
      </div>
    </div>
  )
}

TypeformModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

