import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CustomImage } from '../CustomImage'
import { IMAGE_SIZES } from '@/constants/imageSizes'

describe('CustomImage', () => {
  it('renders SVG images directly', () => {
    render(<CustomImage src="test.svg" alt="SVG Test" />)
    
    const img = screen.getByAltText('SVG Test')
    expect(img).toBeInTheDocument()
    expect(img.tagName).toBe('IMG')
    expect(img).toHaveAttribute('src', '/images/optimized/test.svg')
  })

  it('renders raster images with picture element and proper sources', () => {
    render(<CustomImage src="test.jpg" alt="Raster Test" className="test-class" />)
    
    // Picture element should have the class
    const picture = screen.getByAltText('Raster Test').closest('picture')
    expect(picture).toHaveClass('test-class')
    
    // Get sources by their media types
    const avifSource = document.querySelector('source[type="image/avif"]')
    const webpSource = document.querySelector('source[type="image/webp"]')
    
    // Check avif source
    expect(avifSource).toBeInTheDocument()
    // Check that each size is in the srcset
    IMAGE_SIZES.forEach(size => {
      expect(avifSource?.getAttribute('srcset')).toContain(`/images/optimized/test-${size}.avif ${size}w`)
    })
    
    // Check webp source
    expect(webpSource).toBeInTheDocument()
    // Check that each size is in the srcset
    IMAGE_SIZES.forEach(size => {
      expect(webpSource?.getAttribute('srcset')).toContain(`/images/optimized/test-${size}.webp ${size}w`)
    })
    
    // Check fallback image
    const img = screen.getByAltText('Raster Test')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/images/optimized/test-1024.webp')
    expect(img).toHaveClass('test-class')
  })

  it('handles images with paths correctly', () => {
    render(<CustomImage src="/folder/subfolder/image.png" alt="Path Test" />)
    
    const avifSource = document.querySelector('source[type="image/avif"]')
    const webpSource = document.querySelector('source[type="image/webp"]')
    
    // Check that each size is in the srcset with the expected path
    const expectedBasePath = 'folder/subfolder/image'
    
    IMAGE_SIZES.forEach(size => {
      expect(avifSource?.getAttribute('srcset')).toContain(`/images/optimized/${expectedBasePath}-${size}.avif ${size}w`)
      expect(webpSource?.getAttribute('srcset')).toContain(`/images/optimized/${expectedBasePath}-${size}.webp ${size}w`)
    })
  })

  it('uses default sizes attribute if not provided', () => {
    render(<CustomImage src="test.jpg" alt="Default Sizes Test" />)
    
    const sources = document.querySelectorAll('source')
    sources.forEach(source => {
      expect(source).toHaveAttribute('sizes', '(min-width: 768px) 768px, 100vw')
    })
  })

  it('uses custom sizes attribute if provided', () => {
    const customSizes = '(min-width: 1200px) 1200px, 100vw'
    render(<CustomImage src="test.jpg" alt="Custom Sizes Test" sizes={customSizes} />)
    
    const sources = document.querySelectorAll('source')
    sources.forEach(source => {
      expect(source).toHaveAttribute('sizes', customSizes)
    })
  })
})