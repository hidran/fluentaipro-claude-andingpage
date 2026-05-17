export default function GradientText({ children, className = '', ...props }) {
  return <span className={`gradient-text ${className}`} {...props}>{children}</span>
}
