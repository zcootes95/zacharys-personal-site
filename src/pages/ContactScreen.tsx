import { ScootesLink } from '@/components/common/ScootesLink'
import { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'

type HexString = string

const confettiGreenShades: HexString[] = ['#2ecc71', '#27ae60', '#16a085', '#1abc9c', '#8bc34a']

const ContactScreen = () => {
    const [isDot1Clicked, setIsDot1Clicked] = useState<boolean>(false)
    const [isDot2Clicked, setIsDot2Clicked] = useState<boolean>(false)
    const [isDot3Clicked, setIsDot3Clicked] = useState<boolean>(false)
    const [isDot1Exploding, setIsDot1Exploding] = useState(false)
    const [isDot2Exploding, setIsDot2Exploding] = useState(false)
    const [isDot3Exploding, setIsDot3Exploding] = useState(false)
    return (
        <div className='flex flex-col items-center'>
            <h1 className='m-4 text-xl'> Contact me</h1>
            <h2>Click all the dots to reveal my email!</h2>
            <div className='flex flex-row m-20'>
                <div
                    onClick={() => {
                        setIsDot1Exploding(true)
                        setIsDot1Clicked(true)
                    }}
                    className={`${isDot1Clicked ? 'bg-green-700' : 'bg-red-500'} w-20 h-20 rounded-full mx-4 flex justify-center items-center`}
                >
                    {isDot1Exploding && <ConfettiExplosion force={0.2} duration={2200} particleCount={30} width={200} colors={confettiGreenShades} />}
                </div>
                <div
                    onClick={() => {
                        setIsDot2Exploding(true)
                        setIsDot2Clicked(true)
                    }}
                    className={`${isDot2Clicked ? 'bg-green-700' : 'bg-red-500'} w-20 h-20 rounded-full mx-4 flex justify-center items-center`}
                >
                    {isDot2Exploding && <ConfettiExplosion force={0.2} duration={2200} particleCount={30} width={200} colors={confettiGreenShades} />}
                </div>
                <div
                    onClick={() => {
                        setIsDot3Exploding(true)
                        setIsDot3Clicked(true)
                    }}
                    className={`${isDot3Clicked ? 'bg-green-700' : 'bg-red-500'} w-20 h-20 rounded-full mx-4 flex justify-center items-center`}
                >
                    {isDot3Exploding && <ConfettiExplosion force={0.2} duration={2200} particleCount={30} width={200} colors={confettiGreenShades} />}
                </div>
            </div>

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
        </div>
    )
}

export default ContactScreen
