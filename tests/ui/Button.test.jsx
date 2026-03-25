import { render, screen } from '@testing-library/react'
import Button from '../../src/components/ui/Button'

test('renders primary button with label', () => {
  render(<Button variant="primary">Start for free</Button>)
  expect(screen.getByText('Start for free')).toBeInTheDocument()
})

test('renders as anchor when href provided', () => {
  render(<Button href="https://example.com">Go</Button>)
  expect(screen.getByRole('link', { name: 'Go' })).toHaveAttribute('href', 'https://example.com')
})

test('applies secondary styles by default', () => {
  const { container } = render(<Button>Click</Button>)
  expect(container.firstChild).toHaveClass('btn-secondary')
})
