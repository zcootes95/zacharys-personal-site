import React, { useState, MouseEvent, CSSProperties } from 'react'

interface ParallaxCardProps {
    children: React.ReactNode
    width?: string
    height?: string
    intensity?: number
}

const ParallaxCard: React.FC<ParallaxCardProps> = ({ children, width = '100%', height = 'auto', intensity = 20 }) => {
    const [tiltStyle, setTiltStyle] = useState<CSSProperties>({})

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const { width: rectWidth, height: rectHeight, left, top } = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - left
        const y = e.clientY - top
        const rotateY = ((x - rectWidth / 2) / (rectWidth / 2)) * intensity
        const rotateX = -((y - rectHeight / 2) / (rectHeight / 2)) * intensity
        setTiltStyle({ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` })
    }

    const resetTilt = () => {
        setTiltStyle({
            transform: 'rotateX(0deg) rotateY(0deg)',
            transition: 'transform 0.3s ease'
        })
    }

    return (
        <div style={{ perspective: '1000px', width, height }} onMouseMove={handleMouseMove} onMouseLeave={resetTilt}>
            <div style={tiltStyle}>{children}</div>
        </div>
    )
}

export default ParallaxCard
