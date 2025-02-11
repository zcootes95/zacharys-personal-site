import { CustomImage } from '@/components/common/CustomImage'
import { ScootesLink } from '@/components/common/ScootesLink'
import { Card, CardContent } from '@/components/ui/card'
import { quesoData } from '@/constants/quesoData'
import { PageHeader } from '@/layout/PageHeader'

const QuesoScreen = () => {
    return (
        <div>
            <PageHeader title='Austin Texas Queso Hierarchy' />

            <div className='w-full max-w-6xl mx-auto py-8 space-y-8'>
                {quesoData.map((item, index) => (
                    <div key={index} className='flex flex-col gap-8 min-h-[24rem] md:h-96 md:flex-row items-center'>
                        <div className={`w-full h-64 md:h-full md:w-1/2 order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                            <CustomImage src={item.imagePath} alt={item.imageAlt} className='w-full h-full object-contain rounded-lg shadow-lg bg-blue-100' />
                        </div>
                        <Card className={`w-full md:w-1/2 h-full flex flex-col order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                            <CardContent className='pt-6 h-full flex flex-col'>
                                <div className='flex flex-col flex-grow gap-4'>
                                    <div className='text-xl font-bold'>
                                        {item.ranking}. {item.name}
                                    </div>
                                    <div className='flex-grow'>{item.description}</div>
                                    <div className='mt-auto flex justify-end'>
                                        <ScootesLink external href={item.link}>
                                            Learn More
                                        </ScootesLink>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuesoScreen
