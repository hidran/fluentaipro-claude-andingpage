import '@testing-library/jest-dom'

// jsdom does not implement IntersectionObserver; provide a no-op stub
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
