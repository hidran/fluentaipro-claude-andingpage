import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FAQ from '../../src/components/sections/FAQ'

test('renders all FAQ questions', () => {
  render(<FAQ />)
  expect(screen.getByText(/how does the ai pronunciation feedback work/i)).toBeInTheDocument()
  expect(screen.getByText(/can i cancel/i)).toBeInTheDocument()
})

test('all answers are hidden by default', () => {
  render(<FAQ />)
  const buttons = screen.getAllByRole('button')
  buttons.forEach(btn => expect(btn).toHaveAttribute('aria-expanded', 'false'))
})

test('clicking a question expands it', async () => {
  const user = userEvent.setup()
  render(<FAQ />)
  const firstBtn = screen.getAllByRole('button')[0]
  await user.click(firstBtn)
  expect(firstBtn).toHaveAttribute('aria-expanded', 'true')
})

test('clicking an open question closes it', async () => {
  const user = userEvent.setup()
  render(<FAQ />)
  const firstBtn = screen.getAllByRole('button')[0]
  await user.click(firstBtn)
  await user.click(firstBtn)
  expect(firstBtn).toHaveAttribute('aria-expanded', 'false')
})
