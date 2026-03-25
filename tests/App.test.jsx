import { render } from '@testing-library/react'
import App from '../src/App'

test('App renders without crashing', () => {
  render(<App />)
  expect(document.body).toBeInTheDocument()
})
