import ConfettiExplosion from 'react-confetti-explosion'
import { ScootesLink } from '../common/ScootesLink'
import { confettiGreenShades } from '@/constants/confettiShades'

type EmailConfettiLinkProps = {
    isDot1Clicked: boolean
    isDot2Clicked: boolean
    isDot3Clicked: boolean
}

export const EmailConfettiLink = ({ isDot1Clicked, isDot2Clicked, isDot3Clicked }: EmailConfettiLinkProps) => {
    return (
        <>
            {[isDot1Clicked, isDot2Clicked, isDot3Clicked].filter((x) => x).length === 0 && <div>Click those dots!</div>}
            {[isDot1Clicked, isDot2Clicked, isDot3Clicked].filter((x) => x).length === 1 && <div>Nice</div>}
            {[isDot1Clicked, isDot2Clicked, isDot3Clicked].filter((x) => x).length === 2 && <div>ONE MORE!</div>}

            {isDot1Clicked && isDot2Clicked && isDot3Clicked && (
                <div className='flex flex-col items-center'>
                    <ConfettiExplosion force={0.2} duration={4000} particleCount={200} width={400} colors={confettiGreenShades} />
                    <ScootesLink external href='mailto:scootes26@gmail.com'>
                        scootes26@gmail.com
                    </ScootesLink>
                </div>
            )}
        </>
    )
}
