import PropTypes from 'prop-types'

export function Button({ href, onClick, type = 'button', className = '', children, ...props }) {
  const classes = ['btn', className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
