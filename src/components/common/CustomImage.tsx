import { IMAGE_SIZES } from '@/constants/imageSizes'

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const placeholderImage = '/system/placeholder.png'

// TODO: Add placeholder image

// Optimization that helps the browser to load the right image size
const defaultSizes = '(min-width: 768px) 768px, 100vw'

export const CustomImage = ({ src = placeholderImage, alt, className, sizes = defaultSizes, ...props }: CustomImageProps) => {
    const extension = src.split('.').pop()?.toLowerCase()
    const baseFilename = src.replace(/\.[^/.]+$/, '')
    const baseFilenameWithoutLeadingSlash = baseFilename.replace(/^\//, '')

    // If it's an SVG, render it directly
    if (extension === 'svg') {
        return <img src={`/images/optimized/${src}`} alt={alt} className={className} {...props} />
    }

    // For raster images, use picture element with srcset
    const webpSrcSet = IMAGE_SIZES.map((size) => `/images/optimized/${baseFilenameWithoutLeadingSlash}-${size}.webp ${size}w`).join(', ')

    const avifSrcSet = IMAGE_SIZES.map((size) => `/images/optimized/${baseFilenameWithoutLeadingSlash}-${size}.avif ${size}w`).join(', ')

    return (
        <picture className={className}>
            <source type='image/avif' srcSet={avifSrcSet} sizes={sizes} />
            <source type='image/webp' srcSet={webpSrcSet} sizes={sizes} />
            <img src={`/images/optimized/${baseFilenameWithoutLeadingSlash}-1024.webp`} className={className} alt={alt} {...props} />
        </picture>
    )
}
