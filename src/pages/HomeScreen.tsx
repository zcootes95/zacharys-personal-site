import { CustomImage } from '@/components/common/CustomImage'
import ParallaxCard from '@/components/common/ParallaxCard'
import { ScootesLink } from '@/components/common/ScootesLink'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
type BadgeName = 'Developer' | 'Designer' | 'Open Source' | 'Enthusiast' | 'Traveler' | 'Musician'

const badgeThemes: Record<BadgeName, string> = {
    Developer: 'bg-blue-300',
    Designer: 'bg-green-300',
    'Open Source': 'bg-red-300',
    Enthusiast: 'bg-yellow-300',
    Traveler: 'bg-purple-300',
    Musician: 'bg-pink-300'
}
const badges = Object.keys(badgeThemes) as BadgeName[]
const HomeScreen = () => {
    const [selectedBadge, setSelectedBadge] = useState<BadgeName>('Developer')

    return (
        <div>
            <div className='w-full grid grid-cols-1 md:grid-cols-[20%_40%_40%] gap-4'>
                <div className='flex flex-col bg-gray-200 p-1 rounded-md'>
                    <div className='m-4'>
                        <ParallaxCard>
                            <div className='w-full aspect-square rounded-full border-4 border-white'>
                                <CustomImage src={'/home/bio_pic.jpg'} className='w-full h-full object-contain rounded-full shadow-lg bg-secondary' />
                            </div>
                        </ParallaxCard>
                    </div>
                    <div className='text-center font-bold text-xl'>Zachary Cootes</div>
                    <div className='text-center font-semibold text-sm text-gray-500'>Software Developer</div>
                    <div className='flex flex-col items-center w-full px-4 overflow-hidden flex-grow mt-4'>
                        <div className={`${badgeThemes[selectedBadge]} w-full rounded-md p-4 flex-grow`}>
                            <div className='flex flex-wrap items-center gap-2'>
                                {badges.map((badge) => (
                                    <Badge
                                        key={badge}
                                        onClick={() => setSelectedBadge(badge)}
                                        className={`cursor-pointer text-xs px-1 py-0.5 
              ${selectedBadge === badge ? 'border-2 border-white' : 'bg-blue-600 text-white border-2'}`}
                                    >
                                        {badge}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='w-full p-4'>
                        <Link
                            to='/contact'
                            className='w-full self-end bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 text-sm rounded mt-2 inline-block text-center'
                        >
                            Download Resume
                        </Link>{' '}
                        <Link
                            to='/contact'
                            className='w-full self-end bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 text-sm rounded mt-2 inline-block text-center'
                        >
                            Contact me
                        </Link>
                    </div>
                </div>

                <div className='bg-gray-300 p-4 flex flex-col gap-4 rounded-md'>
                    <div className='flex-1 bg-blue-300 flex flex-col items-left justify-center rounded-md p-6'>
                        <div className='font-bold text-lg mb-2'>Bio</div>
                        <div className='text-sm text-left'>
                            Optimist, life long learner, and curry enthusiast. I very much enjoy long endurance activities that leave you exhausted and
                            fulfilled. Hunger is the best sauce. When I'm not exploring the depths of programming, I'm riding my bike up a mountain, swimming in
                            the sun, or tinkering with something.
                        </div>
                    </div>
                    <div className='flex-1 bg-blue-300 flex flex-col items-left justify-center rounded-md p-6 gap-2'>
                        <div className='font-bold text-lg mb-4'>Projects</div>
                        <div className='flex flex-row gap-8 items-center'>
                            <CustomImage src='/home/foxtail.png' className='h-10 rounded-md' />
                            <div className='font-semibold'>Foxtail AI</div>
                        </div>
                        <div className='flex flex-row gap-8 items-center'>
                            <CustomImage src='/home/pennyroyal.png' className='h-10 rounded-sm' />
                            <div className='font-semibold'>Pennyroyal</div>
                        </div>
                        <Link to='/projects' className='mt-4 self-end bg-blue-500 hover:bg-blue-700 text-white p-2 text-sm rounded inline-block text-center'>
                            Check it out
                        </Link>
                    </div>
                    <div className='flex-1 bg-blue-300 flex flex-col items-left justify-center rounded-md p-6'>
                        <div className='flex font-bold text-lg mb-2'>Ascii Art</div>
                        <div className='flex text-sm text-left flex-grow'>
                            Its the little things in life. I think using Ascii art when possible is a fun way to add a little extra to a project. Sometimes its
                            that really cool looking ascii art message after tests pass that make it all worth it.
                        </div>
                        <div className='flex justify-end'>
                            <Link
                                to='/acsii-art'
                                className='mt-4 self-end bg-blue-500 hover:bg-blue-700 text-white p-2 text-sm rounded inline-block text-center'
                            >
                                Get Artsy
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-300 p-4 flex flex-col gap-4 rounded-md'>
                    <div className='bg-blue-300 flex flex-col items-left justify-center rounded-md p-6'>
                        <div className='font-bold text-lg mb-2'>Swimming</div>
                        <div className='text-sm text-left'>Explore my 10 year journey to master, relish, and splash through the grand sport of swimming.</div>
                        <Link to='/swimming' className='mt-4 self-end bg-blue-500 hover:bg-blue-700 text-white p-2 text-sm rounded inline-block text-center'>
                            Get Artsy
                        </Link>
                    </div>
                    <div className='flex-1 bg-blue-300 flex flex-col items-left justify-center rounded-md p-6'>
                        <div className='font-bold text-lg mb-2'>Top Queso's in Austin, TX</div>
                        <div className='text-sm text-left flex-grow'>
                            After leaving Austin, I realized that the term queso in not universal. Most places I go to think I'm talking about a plastic-y ball
                            park cheese that has no flavor or substance. Queso is so much more and everytime I'm back in Austin I make sure to get my fill and
                            scratch the ever hungry queso itch.
                        </div>
                        <Link to='/queso' className='mt-4 self-end bg-yellow-500 hover:bg-yellow-700 text-white p-2 text-sm rounded inline-block text-center'>
                            Let's get Cheesy
                        </Link>
                    </div>

                    <div className='max-w-md w-full p-6 bg-blue-300 rounded-lg shadow-md'>
                        <div className='font-bold text-lg mb-2'>Favorite Poem Stanza</div>
                        <p className='text-sm text-gray-700'>
                            The woods are lovely, dark and deep,
                            <br />
                            But I have promises to keep,
                            <br />
                            And miles to go before I sleep,
                            <br />
                            And miles to go before I sleep.
                        </p>
                        <div className='mt-4 text-right text-gray-600 text-sm'>- Robert Frost</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
