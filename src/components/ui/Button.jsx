export default function Button({ children, variant = 'secondary', href, onClick, className = '', ...rest }) {
  const cls = `btn-${variant} ${className}`.trim()
  if (href) {
    return <a href={href} className={cls} {...rest}>{children}</a>
  }
  return <button onClick={onClick} className={cls} {...rest}>{children}</button>
}
