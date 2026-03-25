import { render, screen } from '@testing-library/react'
import Hero from '../../src/components/sections/Hero'

test('renders main headline', () => {
  render(<Hero />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/learn any language/i)
})

test('renders primary CTA linking to app', () => {
  render(<Hero />)
  const cta = screen.getAllByRole('link', { name: /start for free/i })[0]
  expect(cta).toHaveAttribute('href', 'https://fluentapipro.firebaseapp.com/')
})

test('renders stats bar with language count', () => {
  render(<Hero />)
  expect(screen.getByText('50+')).toBeInTheDocument()
  expect(screen.getByText('Languages')).toBeInTheDocument()
})
