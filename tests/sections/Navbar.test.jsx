import { render, screen } from '@testing-library/react'
import Navbar from '../../src/components/sections/Navbar'

test('renders logo', () => {
  render(<Navbar />)
  expect(screen.getByText('FluentAiPro')).toBeInTheDocument()
})

test('renders all nav links', () => {
  render(<Navbar />)
  expect(screen.getByRole('link', { name: 'Features' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Languages' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'FAQ' })).toBeInTheDocument()
})

test('renders CTA button linking to app', () => {
  render(<Navbar />)
  const cta = screen.getByRole('link', { name: /start for free/i })
  expect(cta).toHaveAttribute('href', 'https://fluentapipro.firebaseapp.com/')
})
