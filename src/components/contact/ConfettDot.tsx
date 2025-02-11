import { confettiGreenShades } from '@/constants/confettiShades'
import ConfettiExplosion from 'react-confetti-explosion'

type ConfettiDotProps = {
    isDotExploding: boolean
    isDotClicked: boolean
    setIsDotExploding: (isDot1Exploding: boolean) => void
    setIsDotClicked: (isDot1Clicked: boolean) => void
}
export const ConfettiDot = (props: ConfettiDotProps) => {
    const { isDotClicked, isDotExploding, setIsDotClicked, setIsDotExploding } = props

    return (
        <div
            onClick={() => {
                setIsDotExploding(true)
                setIsDotClicked(true)
            }}
            className={`${isDotClicked ? 'bg-green-700' : 'bg-red-500'} w-20 h-20 rounded-full mx-4 flex justify-center items-center`}
        >
            {isDotExploding && <ConfettiExplosion force={0.2} duration={2200} particleCount={30} width={200} colors={confettiGreenShades} />}
        </div>
    )
}
