import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { PageHeader } from '../PageHeader'
import { renderWithRouter } from '../../test/utils'

describe('PageHeader', () => {
  it('renders the title correctly', () => {
    renderWithRouter(<PageHeader title="Test Page" />)
    
    const titleElement = screen.getByText('Test Page')
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.closest('div')).toHaveClass('text-4xl font-bold')
  })

  it('includes a back button that links to home', () => {
    renderWithRouter(<PageHeader title="Test Page" />)
    
    const backButton = screen.getByRole('link')
    expect(backButton).toHaveAttribute('href', '/')
    
    // Check if it contains the ArrowLeft icon
    const svgIcon = backButton.querySelector('svg')
    expect(svgIcon).toBeInTheDocument()
  })

  it('has the correct layout structure', () => {
    const { container } = renderWithRouter(<PageHeader title="Test Page" />)
    
    // Check for the main container
    const mainContainer = container.querySelector('.flex.flex-row.items-center.mb-8')
    expect(mainContainer).toBeInTheDocument()
    
    // Check for the button and its styling
    const button = container.querySelector('.justify-center')
    expect(button).toBeInTheDocument()
  })
})