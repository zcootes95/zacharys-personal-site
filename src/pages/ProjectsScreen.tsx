import { CustomImage } from '@/components/common/CustomImage'
import ParallaxCard from '@/components/common/ParallaxCard'
import ProjectCard from '@/components/common/ProjectCard'
import { LinkButton } from '@/components/common/ScootesLink'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { foxtailTechnologiesData, pennyroyalTechnologiesData } from '@/constants/technologyData'
import { Star } from 'lucide-react'
import { title } from 'process'

const ProjectsScreen = () => {
    return (
        <div>
            <div className='text-4xl font-bold mb-8'>Projects</div>
            <Card>
                <CardHeader>
                    <CardTitle className='text-xl'>Foxtail AI</CardTitle>
                    <CardDescription className='text-md'>
                        B2C solution that empowers online resellers to create and manage listings across multiple e-commerce platforms—reducing listing
                        overhead, increasing reseller profitability ( Facebook Marketplace, eBay, Poshmark, Mercari, Depop, and Etsy)
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-col md:flex-row gap-6 md:p-4'>
                        <div className='w-full md:w-1/5'>
                            <CustomImage className='w-full max-h-48 object-contain aspect-auto rounded-md ' src='home/foxtail' alt="Foxtail AI's Logo" />
                        </div>
                        <div className='flex-2'>
                            {' '}
                            <>
                                <div className='text-md mb-4 font-semibold'>My Role & Highlights</div>
                                <ul className='list-none'>
                                    <li>• Co-founded startup enabling multi-platform e-commerce listings (secured 2 funding rounds)</li>
                                    <li>
                                        • iOS{' '}
                                        <span className='inline-flex items-center gap-0.5'>
                                            (4.4 <Star className='h-4 w-4 fill-current' />)
                                        </span>
                                        , Android, and Web app
                                    </li>
                                    <li>• Generated 130K+ listings and managed $3.3M inventory</li>
                                    <li>• Built cross-platform Web, iOS, and Android apps with React/React Native</li>
                                    <li>• Automated ~10K daily tasks via 48 integration scripts (Etsy, Mercari, Poshmark, eBay, Depop, FB Marketplace)</li>
                                    <li>• Optimized frontend for 20K+ documents using Redux and DOM virtualization</li>
                                    <li>
                                        • Ensured stable production for 150+ users through proactive error monitoring (Sentry, screen recording, GCP logging)
                                    </li>
                                    <li>• Accelerated listing creation with ~20-second AI-powered generation</li>
                                </ul>
                            </>
                        </div>
                    </div>
                    <div className='mx-auto px-4 flex flex-col gap-4 mt-4'>
                        <div className='text-md font-semibold mb-4'>Technologies</div>
                        <div className='flex flex-row flex-wrap gap-6'>
                            {foxtailTechnologiesData.map((item) => (
                                <div key={item.name} className='flex flex-col items-center gap-2'>
                                    <ParallaxCard>
                                        <div className='w-20 aspect-square rounded-md border-4 border-white'>
                                            <CustomImage src={item.imagePath} className='w-20 h-full object-contain rounded-md shadow-lg bg-secondary' />
                                        </div>
                                    </ParallaxCard>
                                    <div className='text-sm'>{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className='flex justify-end mt-4'>
                    <LinkButton external href='https://foxtail.ai/' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-sm rounded'>
                        Check it out
                    </LinkButton>
                </CardFooter>
            </Card>
            <Card className='mt-4'>
                <CardHeader>
                    <CardTitle className='text-lg'>Pennyroyal</CardTitle>
                    <CardDescription className='text-md'>
                        AI-powered image-generation site using TypeScript, React, and Redux, enabling users to purchase custom pet merchandise featuring
                        AI-stylized photos. Utilized Midjourney for styling pet photos
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-col md:flex-row gap-6 md:p-4'>
                        <div className='w-full md:w-1/5'>
                            <CustomImage className='w-full max-h-48 object-contain aspect-auto rounded-md' src='home/pennyroyal' alt="Pennyroyal's Logo" />
                        </div>
                        {/* Content container: 80% width on medium screens */}
                        <div className='w-full md:w-4/5'>
                            <div className='text-md mb-4 font-semibold'>My Role & Highlights</div>
                            <ul className='list-none'>
                                <li>• Architected site design</li>
                                <li>• Developed</li>
                                <li>• ...</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mx-auto px-4 flex flex-col gap-4 mt-4'>
                        <div className='text-md font-semibold mb-4'>Technologies</div>
                        <div className='flex flex-row flex-wrap gap-6'>
                            {pennyroyalTechnologiesData.map((item) => (
                                <div key={item.name} className='flex flex-col items-center gap-2'>
                                    <ParallaxCard>
                                        <div className='w-20 aspect-square rounded-md border-4 border-white'>
                                            <CustomImage src={item.imagePath} className='w-20 h-full object-contain rounded-md shadow-lg bg-secondary' />
                                        </div>
                                    </ParallaxCard>
                                    <div className='text-sm'>{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProjectsScreen
