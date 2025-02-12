import { Card, CardContent } from '@/components/ui/card'
import { butterflyDataOverTime } from '@/constants/swimming/swimmingdata'
import { individualMedleyDataOverTime } from '@/constants/swimming/swimmingdata'
import { ResponsiveTimeline } from '@/components/common/Timeline'
import { CustomImage } from '@/components/common/CustomImage'
import { ScootesLink } from '@/components/common/ScootesLink'
import { SwimmingProgressionChart } from '@/components/swimming/SwimmingProgressionChart'
import { swimmingTeams } from '@/constants/swimming/swimmingTeams'
import { PageHeader } from '@/layout/PageHeader'
import { swimmingCardData as swimmingRowData } from '@/constants/swimming/swimmingCardData'
import { SwimmingRow } from '@/components/swimming/SwimmingRow'

const SwimmingScreen = () => {
    return (
        <div className='w-full max-w-6xl mx-auto py-8'>
            <PageHeader title='From Man to Fish' />
            <Card className='shadow-md border rounded-md mb-8'>
                <CardContent className='p-6'>
                    <div className='text-xl font-bold'>Team Timeline</div>
                    <div className='p-8'>
                        <ResponsiveTimeline events={swimmingTeams} />
                    </div>
                </CardContent>
            </Card>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
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
            <div className='space-y-8'>
                {swimmingRowData.map((data, index) => (
                    <SwimmingRow data={data} index={index} />
                ))}
            </div>
        </div>
    )
}

export default SwimmingScreen
