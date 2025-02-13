import { confettiBlueShades } from '@/constants/confettiShades'
import { BadgeName, badgeThemes, badges } from '@/constants/home/characterBadges'
import { useState, useRef, useEffect } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'
import { Badge } from '../ui/badge'

export const CharacterBadges = () => {
    const [explodingBadge, setExplodingBadge] = useState<BadgeName | null>(null)
    const explosionTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleBadgeClick = (badge: BadgeName) => {
        if (explosionTimeoutRef.current) {
            clearTimeout(explosionTimeoutRef.current)
        }
        setExplodingBadge(badge)
        explosionTimeoutRef.current = setTimeout(() => {
            setExplodingBadge(null)
        }, 2200)
    }

    // Clear timer on unmount
    useEffect(() => {
        return () => {
            if (explosionTimeoutRef.current) clearTimeout(explosionTimeoutRef.current)
        }
    }, [])

    return (
        <div className='flex flex-col items-center w-full overflow-hidden flex-grow mt-4'>
            <div className={` w-full rounded-md p-4 flex-grow`}>
                <div className='flex flex-wrap items-center justify-center gap-2'>
                    {badges.map((badge) => (
                        <div>
                            {explodingBadge === badge && (
                                <div className='flex items-center justify-center'>
                                    <ConfettiExplosion force={0.2} duration={2200} particleCount={30} width={200} colors={confettiBlueShades} />
                                </div>
                            )}
                            <Badge
                                key={badge}
                                onClick={() => handleBadgeClick(badge)}
                                className='cursor-pointer text-xs px-1 py-0.5 bg-[#040403] text-white border-2'
                            >
                                {badge}
                            </Badge>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
