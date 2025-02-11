import { Card, CardContent } from '@/components/ui/card'
import { butterflyDataOverTime } from '@/constants/swimmingdata'
import { individualMedleyDataOverTime } from '@/constants/swimmingdata'
import HorizontalTimeline from '@/components/common/Timeline'
import { CustomImage } from '@/components/common/CustomImage'
import { ScootesLink } from '@/components/common/ScootesLink'
import { SwimmingProgressionChart } from '@/components/swimming/SwimmingProgressionChart'
import { swimmingTeams } from '@/constants/swimmingTeams'
import { PageHeader } from '@/layout/PageHeader'

const SwimmingScreen = () => {
    return (
        <div className='w-full max-w-6xl mx-auto py-8 px-4'>
            <PageHeader title='From Man to Fish' />
            <div className='space-y-6'>
                <div className='flex flex-col gap-8 min-h-[24rem] md:h-96 md:flex-row items-center'>
                    <div className={`w-full h-64 md:h-full md:w-1/2 order-1 md:order-2`}>
                        <CustomImage
                            src='/swimming/youngswimmer.jpg'
                            alt='Swimming'
                            className='w-full h-full object-contain rounded-lg shadow-lg bg-blue-100'
                        />
                    </div>
                    <Card className={`w-full md:w-1/2 h-full flex flex-col order-2 md:order-1`}>
                        <CardContent className='pt-6 h-full flex flex-col'>
                            <div className='flex flex-col flex-grow gap-4'>
                                <div className='text-xl font-bold'>Overview</div>
                                <div className='flex-grow'>
                                    {' '}
                                    My swimming career spanned 11 years and ranged 4 different teams. For the more elite portion of my swimming career (2012 -
                                    2018) I spent 20 hours a week training. While swimming kept me in fantastic health and fitness it's main rewards were the
                                    friends I made and the mental strategies I gained. I learned that my peak mental health occurs around 150 heart rate.
                                </div>
                                <div className='mt-auto flex justify-end'>
                                    <ScootesLink external href='https://www.swimcloud.com/swimmer/234062/'>
                                        Swimming Stats
                                    </ScootesLink>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className='flex flex-col gap-8 min-h-[24rem] md:h-96 md:flex-row items-center'>
                    <div className={`w-full h-64 md:h-full md:w-1/2 order-1 md:order-1`}>
                        <CustomImage src='/swimming/calpoly1.webp' alt='Swimming' className='w-full h-full object-contain rounded-lg shadow-lg bg-blue-100' />
                    </div>
                    <Card className={`w-full md:w-1/2 h-full flex flex-col order-2 md:order-2`}>
                        <CardContent className='pt-6 h-full flex flex-col'>
                            <div className='flex flex-col flex-grow gap-4'>
                                <div className='text-xl font-bold'>Winter Nationals 2015</div>
                                <div className='flex-grow'>
                                    {' '}
                                    Competed at the 2015 AT&T Winter National Championships in Federal Way, WA. Raced the 200 Yard Butterfly and placed 23rd in
                                    the nation. Raced against Michael Phelps who placed 1st. When I was swimming in the warm down pool I saw a bunch of moms
                                    leaning over the railing with sharpies, but it was at this point that I realized I was warming up in Michael Phelps lane.
                                    His feet were massive. I was only 5.67 seconds behind the 23 time Olympic gold medal champion.
                                </div>
                                <div className='mt-auto flex justify-end'>
                                    <ScootesLink
                                        external
                                        href='https://websitedevsa.blob.core.windows.net/sitefinity/docs/default-source/eventsdocuments/meet-results/2015-att-winter-nationals/winter-nats-complete_results_book.pdf'
                                    >
                                        Meet Results
                                    </ScootesLink>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className='flex flex-col gap-8 min-h-[24rem] md:h-96 md:flex-row items-center'>
                    <div className={`w-full h-64 md:h-full md:w-1/2 order-1 md:order-2`}>
                        <CustomImage src='/swimming/calpoly2.jpg' alt='Swimming' className='w-full h-full object-contain rounded-lg shadow-lg bg-blue-100' />
                    </div>
                    <Card className={`w-full md:w-1/2 h-full flex flex-col order-2 md:order-1`}>
                        <CardContent className='pt-6 h-full flex flex-col'>
                            <div className='flex flex-col flex-grow gap-4'>
                                <div className='text-xl font-bold'>Cal Poly 200 Butterfly School Record</div>
                                <div className='flex-grow'>
                                    At the mid-season championship meet I swam the school record for the 200 Yard Butterfly. My parents were there and it was
                                    really awesome.
                                </div>
                                <div className='mt-auto flex justify-end'>
                                    <ScootesLink external href='https://gopoly.com/news/2015/11/22/11_22_2015_5533.aspx'>
                                        Read Article
                                    </ScootesLink>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className='flex flex-col gap-8 min-h-[24rem] md:h-96 md:flex-row items-center'>
                    <div className={`w-full h-64 md:h-full md:w-1/2 order-1 md:order-1`}>
                        <CustomImage
                            src='/swimming/swimmingfriends.webp'
                            alt='Swimming'
                            className='w-full h-full object-contain rounded-lg shadow-lg bg-blue-100'
                        />
                    </div>
                    <Card className={`w-full md:w-1/2 h-full flex flex-col order-2 md:order-2`}>
                        <CardContent className='pt-6 h-full flex flex-col'>
                            <div className='flex flex-col flex-grow gap-4'>
                                <div className='text-xl font-bold'>Swimming's gift</div>
                                <div className='flex-grow'>
                                    No one will remember the times you went, but everyone will remember how you made them feel. Here's to all the life long
                                    friends I made along the way.
                                </div>
                                <div className='mt-auto flex justify-end'>
                                    <ScootesLink external href='https://gopoly.com/sports/swimming-and-diving/roster/2017-18'>
                                        Team Roster
                                    </ScootesLink>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <Card className='shadow-md border rounded-md'>
                    <CardContent className='p-6'>
                        <div className='text-xl font-bold'>Team Timeline</div>
                        <div className='p-8'>
                            <HorizontalTimeline events={swimmingTeams} />
                        </div>
                    </CardContent>
                </Card>
                <div className='grid grid-cols-2 gap-6 '>
                    <Card className='shadow-md border rounded-md'>
                        <CardContent className='p-6'>
                            <SwimmingProgressionChart title='200 Yard Butterfly' data={butterflyDataOverTime.swims} />
                        </CardContent>
                    </Card>
                    <Card className='shadow-md border rounded-md'>
                        <CardContent className='p-6'>
                            <SwimmingProgressionChart title='400 Yard Individual Medley' data={individualMedleyDataOverTime.swims} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default SwimmingScreen
