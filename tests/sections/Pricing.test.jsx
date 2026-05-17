import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Pricing from '../../src/components/sections/Pricing'

test('shows monthly prices by default', () => {
  render(<Pricing />)
  expect(screen.getByText('12.99')).toBeInTheDocument()
  expect(screen.getByText('24.99')).toBeInTheDocument()
})

test('shows yearly prices after toggling to yearly', async () => {
  const user = userEvent.setup()
  render(<Pricing />)
  await user.click(screen.getByRole('button', { name: /yearly/i }))
  expect(screen.getByText('10.39')).toBeInTheDocument()
  expect(screen.getByText('19.99')).toBeInTheDocument()
})

test('renders all three plans', () => {
  render(<Pricing />)
  expect(screen.getByText('Free')).toBeInTheDocument()
  expect(screen.getByText('Silver')).toBeInTheDocument()
  expect(screen.getByText('Gold')).toBeInTheDocument()
})
