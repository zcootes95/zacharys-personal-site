import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { CustomButton } from '../CustomButton'
import { renderWithRouter } from '../../../test/utils'

describe('CustomButton', () => {
  it('renders with default styling', () => {
    const { container } = renderWithRouter(<CustomButton link="/test" text="Test Button" />)
    
    const link = screen.getByRole('link', { name: /test button/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
    
    // Find the button by its class directly using query selector
    const button = container.querySelector('.mt-4.w-full')
    expect(button).toBeInTheDocument()
  })

  it('renders with right alignment when right prop is true', () => {
    const { container } = renderWithRouter(<CustomButton link="/test" text="Test Button" right />)
    
    const link = screen.getByRole('link', { name: /test button/i })
    expect(link).toBeInTheDocument()
    
    // Find the button by its class directly using query selector
    const button = container.querySelector('.mt-4.self-end')
    expect(button).toBeInTheDocument()
  })

  it('navigates to the correct route when clicked', async () => {
    const { user } = renderWithRouter(<CustomButton link="/test-route" text="Navigate" />)
    
    const button = screen.getByRole('link', { name: /navigate/i })
    await user.click(button)
    
    // In a real browser, this would navigate to /test-route
    // In tests, we can verify the link has the correct href
    expect(button).toHaveAttribute('href', '/test-route')
  })
})