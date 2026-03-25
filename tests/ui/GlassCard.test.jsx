import { render, screen } from '@testing-library/react'
import GlassCard from '../../src/components/ui/GlassCard'

test('renders children inside glass card', () => {
  render(<GlassCard><span>Hello</span></GlassCard>)
  expect(screen.getByText('Hello')).toBeInTheDocument()
})

test('applies extra className', () => {
  const { container } = render(<GlassCard className="extra">x</GlassCard>)
  expect(container.firstChild).toHaveClass('glass-card', 'extra')
})
