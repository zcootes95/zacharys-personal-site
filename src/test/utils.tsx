import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { ReactElement } from 'react'

// Helper function to render components with Router
export function renderWithRouter(ui: ReactElement, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route)
  
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter })
  }
}

// Helper function for any custom component wrapper
export function renderWithProviders(ui: ReactElement) {
  return {
    user: userEvent.setup(),
    ...render(ui, { 
      wrapper: ({ children }) => (
        <BrowserRouter>
          {children}
        </BrowserRouter>
      ) 
    })
  }
}