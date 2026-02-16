import { useState } from 'react'
import { TypeformModal } from './components/TypeformModal'
import { LandingPage } from './landing-page/LandingPage'
import { TYPEFORM_GENERAL_ID, TYPEFORM_VIP_ID } from './landing-page/config'
import './App.css'

function App() {
  const [typeform, setTypeform] = useState(null)

  const openTypeform = (kind) => {
    if (kind === 'general') {
      setTypeform({ id: TYPEFORM_GENERAL_ID, title: 'General Ticket' })
      return
    }

    setTypeform({ id: TYPEFORM_VIP_ID, title: 'VIP Ticket' })
  }

  const closeTypeform = () => setTypeform(null)

  return (
    <div className="lp">
      <LandingPage onOpenTypeform={openTypeform} />

      <TypeformModal
        open={!!typeform}
        title={typeform?.title ?? 'Ticket'}
        formId={typeform?.id ?? TYPEFORM_GENERAL_ID}
        onClose={closeTypeform}
      />
    </div>
  )
}

export default App

