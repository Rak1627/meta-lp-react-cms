import { Button } from './Button'

export function GetTicketButton({ className = '', label = 'Make My Ads Print Money' }) {
  const classes = ['pill--gradient', className].filter(Boolean).join(' ')
  return (
    <Button href="#pricing" className={classes}>
      {label}
    </Button>
  )
}
