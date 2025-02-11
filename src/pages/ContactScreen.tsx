import { ConfettiDot } from '@/components/contact/ConfettDot'
import { EmailConfettiLink } from '@/components/contact/EmailConfettiLink'
import { useState } from 'react'

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
                <ConfettiDot
                    isDotClicked={isDot1Clicked}
                    isDotExploding={isDot1Exploding}
                    setIsDotClicked={setIsDot1Clicked}
                    setIsDotExploding={setIsDot1Exploding}
                />
                <ConfettiDot
                    isDotClicked={isDot2Clicked}
                    isDotExploding={isDot2Exploding}
                    setIsDotClicked={setIsDot2Clicked}
                    setIsDotExploding={setIsDot2Exploding}
                />
                <ConfettiDot
                    isDotClicked={isDot3Clicked}
                    isDotExploding={isDot3Exploding}
                    setIsDotClicked={setIsDot3Clicked}
                    setIsDotExploding={setIsDot3Exploding}
                />
            </div>

            <EmailConfettiLink isDot1Clicked={isDot1Clicked} isDot2Clicked={isDot2Clicked} isDot3Clicked={isDot3Clicked} />
        </div>
    )
}

export default ContactScreen
