export default function Badge({ children, className = '', ...props }) {
  return (
    <div className={`badge ${className}`.trim()} {...props}>
      <span className="badge-dot" aria-hidden="true" />
      {children}
    </div>
  )
}
