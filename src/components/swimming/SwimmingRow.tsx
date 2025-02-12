import { SwimmingRowData } from '@/constants/swimming/swimmingCardData'
import { CustomImage } from '../common/CustomImage'
import { ScootesLink } from '../common/ScootesLink'
import { Card, CardContent } from '../ui/card'

type SwimmingRowProps = {
    index: number
    data: SwimmingRowData
}

export const SwimmingRow = (props: SwimmingRowProps) => {
    const { altImageText, description, imagePath, link, linkText, title } = props.data
    return (
        <div className='flex flex-col gap-8 min-h-[24rem] md:h-96 md:flex-row items-center'>
            <div className={`w-full h-64 md:h-full md:w-1/2 order-1 md:order-${props.index % 2 === 0 ? 2 : 1}`}>
                <CustomImage src={imagePath} alt={altImageText} className='w-full h-full object-contain rounded-lg shadow-lg bg-blue-100' />
            </div>
            <Card className={`w-full md:w-1/2 h-full flex flex-col order-2 md:order-1`}>
                <CardContent className='pt-6 h-full flex flex-col'>
                    <div className='flex flex-col flex-grow gap-4'>
                        <div className='text-xl font-bold'>{title}</div>
                        <div className='flex-grow'>{description}</div>
                        <div className='mt-auto flex justify-end'>
                            <ScootesLink external href={link}>
                                {linkText}
                            </ScootesLink>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
