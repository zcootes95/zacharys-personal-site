import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { ScootesLink, LinkButton } from '../ScootesLink'
import { renderWithRouter } from '../../../test/utils'

describe('ScootesLink', () => {
  describe('ScootesLink component', () => {
    it('renders an internal link correctly', () => {
      renderWithRouter(<ScootesLink to="/internal-path">Internal Link</ScootesLink>)
      
      const link = screen.getByText('Internal Link')
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '/internal-path')
      expect(link).not.toHaveAttribute('target')
      expect(link).not.toHaveAttribute('rel')
    })

    it('renders an external link correctly', () => {
      renderWithRouter(<ScootesLink external href="https://example.com">External Link</ScootesLink>)
      
      const link = screen.getByText('External Link')
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', 'https://example.com')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('applies custom class names', () => {
      renderWithRouter(<ScootesLink to="/path" className="custom-class">Custom Link</ScootesLink>)
      
      const link = screen.getByText('Custom Link')
      expect(link).toHaveClass('custom-class')
    })
  })

  describe('LinkButton component', () => {
    it('renders an internal button link correctly', () => {
      renderWithRouter(<LinkButton to="/button-path">Button Link</LinkButton>)
      
      const button = screen.getByRole('link', { name: 'Button Link' })
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('href', '/button-path')
      expect(button).not.toHaveAttribute('target')
      expect(button).not.toHaveAttribute('rel')
    })

    it('renders an external button link correctly', () => {
      renderWithRouter(<LinkButton external href="https://example.com">External Button</LinkButton>)
      
      const button = screen.getByRole('link', { name: 'External Button' })
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('href', 'https://example.com')
      expect(button).toHaveAttribute('target', '_blank')
      expect(button).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('renders with specified button variant and size', () => {
      const { container } = renderWithRouter(
        <LinkButton to="/styled" variant="secondary" size="lg">
          Styled Button
        </LinkButton>
      )
      
      const buttonLink = screen.getByRole('link', { name: 'Styled Button' })
      expect(buttonLink).toBeInTheDocument()
      
      // Check the button's classes using querySelector
      const button = container.querySelector('.bg-secondary.h-10')
      expect(button).toBeInTheDocument()
    })
  })
})