import { CustomButton } from '@/components/common/CustomButton'
import { CustomImage } from '@/components/common/CustomImage'
import ParallaxCard from '@/components/common/ParallaxCard'
import { ScootesLink } from '@/components/common/ScootesLink'
import { BioPicture } from '@/components/home/BioPicture'
import { CharacterBadges } from '@/components/home/CharacterBadges'
import { HomeTopicSection } from '@/components/home/HomeTopicSection'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { BadgeName, badgeThemes, badges } from '@/constants/home/characterBadges'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] gap-4'>
            <div className='flex flex-col p-1 rounded-md '>
                <BioPicture />
                <div className='text-center font-bold text-xl'>Zachary Cootes</div>
                <div className='text-center font-semibold text-sm text-gray-500'>Software Developer</div>

                <CharacterBadges />

                <div className='w-full p-4'>
                    <CustomButton link='/contact' text='Contact me' />
                </div>
            </div>

            <div className='bg-white flex flex-col gap-4 rounded-md'>
                <HomeTopicSection
                    title='Bio'
                    contentText="Optimist, life long learner, and curry enthusiast. I very much enjoy long endurance activities that leave you exhausted and fulfilled.
                        Hunger is the best sauce. When I'm not exploring the depths of programming, I'm riding my bike up a mountain, swimming in the sun, or
                        tinkering with something."
                />

                <HomeTopicSection
                    title='Projects'
                    content={
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row gap-8 items-center'>
                                <CustomImage src='/home/foxtail.png' className='h-10 rounded-md' />
                                <div className='font-semibold'>Foxtail AI</div>
                            </div>
                            <div className='flex flex-row gap-8 items-center'>
                                <CustomImage src='/home/pennyroyal.png' className='h-10 rounded-sm' />
                                <div className='font-semibold'>Pennyroyal</div>
                            </div>
                        </div>
                    }
                    route='/projects'
                    routeText='Check it out'
                />
                <HomeTopicSection
                    route='/ascii-art'
                    routeText='Get Artsy'
                    title='Ascii Art'
                    contentText="It's the little things in life. I think using Ascii art when possible is a fun way to add a little extra to a project. Sometimes it's that really cool looking ascii art message after tests pass that make it all worth it."
                />
            </div>

            <div className=' flex flex-col gap-4 rounded-md'>
                <HomeTopicSection
                    route='/swimming'
                    routeText='Splish Splash'
                    title='Swimming'
                    contentText='Explore my 10 year journey to master, relish, and splash through the grand sport of swimming.'
                />
                <HomeTopicSection
                    route='/queso'
                    routeText="Let's get Cheesy"
                    title='Queso in Austin, TX'
                    contentText="After leaving Austin, I realized that the term queso is not universal. Most places I go to think I'm talking about a plastic-y ball park cheese that has no flavor or substance. Queso is so much more and every time I'm back in Austin I make sure to get my fill and scratch the ever hungry queso itch."
                />

                <HomeTopicSection
                    title='Favorite Poem Stanza'
                    content={
                        <div className='text-sm text-gray-700'>
                            The woods are lovely, dark and deep,
                            <br />
                            But I have promises to keep,
                            <br />
                            And miles to go before I sleep,
                            <br />
                            And miles to go before I sleep.
                            <div className='mt-4 text-gray-600 text-sm'> - Robert Frost</div>
                        </div>
                    }
                />
            </div>
        </div>
    )
}

export default HomeScreen
