import { Card, CardContent } from '@/components/ui/card'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, ReferenceDot } from 'recharts'
import React, { useState } from 'react'
import { butterflyDataOverTime, SwimRaceData } from '@/constants/swimmingdata'
import { individualMedleyDataOverTime } from '@/constants/swimmingdata'
import Timeline from '@/components/common/Timeline'
import HorizontalTimeline from '@/components/common/Timeline'
import { CustomImage } from '@/components/common/CustomImage'
import { ScootesLink } from '@/components/common/ScootesLink'

type ChartRaceData = {
    date: string
    time: number
    meetName: string
}

const convertTimeToSeconds = (timeStr: string) => {
    const [min, sec] = timeStr.split(':')
    return parseInt(min, 10) * 60 + parseFloat(sec)
}

const parseDate = (dateStr: string): Date => {
    const [month, day, year] = dateStr.split('-')
    return new Date(Number.parseInt(year), Number.parseInt(month) - 1, Number.parseInt(day))
}

const formatSeconds = (value: number) => {
    const minutes = Math.floor(value / 60)
    const seconds = value % 60
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds.toFixed(2)}`
}

const formatSecondsYAxis = (value: number) => {
    const minutes = Math.floor(value / 60)
    const seconds = value % 60
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds.toFixed(0)}`
}

const formatDate = (dateStr: string) => {
    const date = parseDate(dateStr)
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
}

const formatDateXAxis = (dateStr: string) => {
    const date = parseDate(dateStr)
    return date.toLocaleDateString('en-US', {
        year: 'numeric'
    })
}

// Build and sort chart data

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload
        return <div>{/* Customize if you want a visible tooltip */}</div>
    }
    return null
}

type SwimmingProgressionChartProps = {
    title: string
    data: SwimRaceData[]
}

const SwimmingProgressionChart = (props: SwimmingProgressionChartProps) => {
    const chartData: ChartRaceData[] = props.data.map((swim) => ({
        date: swim.date,
        time: convertTimeToSeconds(swim.time),
        meetName: swim.meetName
    }))

    chartData.sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime())

    // Get min time and its associated meet info
    const times = chartData.map((d) => d.time)
    const minTime = Math.min(...times)
    const bestTimeEntry = chartData.find((d) => d.time === minTime)

    // Y-axis range
    const desiredMin = minTime - 5
    const desiredMax = minTime + 40

    const [hoveredData, setHoveredData] = useState<ChartRaceData | null>(null)
    const ticks = [chartData[0].date, chartData[Math.floor(chartData.length / 2)].date, chartData[chartData.length - 1].date]
    return (
        <div className='max-w-2xl mx-auto p-4'>
            <h1 className='text-xl font-bold text-gray-900 mb-2'>{props.title}</h1>

            <h1 className='flex items-center text-lg font-semibold text-gray-900 mb-0'>
                <span>{hoveredData ? formatSeconds(hoveredData.time) : formatSeconds(minTime)}</span>
                {!hoveredData && (
                    <span className='ml-4 mt-1 inline-block px-3 py-1 text-xs font-medium bg-yellow-400 text-gray-700 rounded-full'>Personal Best ★</span>
                )}
            </h1>

            <p className='font-semibold text-sm text-gray-700 mb-2 min-h-[1.25rem] whitespace-nowrap'>
                {hoveredData
                    ? `${hoveredData.meetName}, ${formatDate(hoveredData.date)}`
                    : bestTimeEntry
                    ? `${bestTimeEntry.meetName}, ${formatDate(bestTimeEntry.date)}`
                    : ''}
            </p>

            <div className='w-full h-96'>
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart
                        data={chartData}
                        margin={{ top: 5, right: 10, left: 0, bottom: 20 }}
                        onMouseMove={(state) => {
                            if (state.isTooltipActive && state.activePayload) {
                                setHoveredData(state.activePayload[0].payload)
                            } else {
                                setHoveredData(null)
                            }
                        }}
                        onMouseLeave={() => setHoveredData(null)}
                    >
                        <XAxis
                            dataKey='date'
                            tickFormatter={formatDateXAxis}
                            tick={{ fontSize: 12, fill: '#000' }}
                            axisLine={false}
                            tickLine={false}
                            ticks={ticks}
                        />
                        <YAxis tickFormatter={formatSecondsYAxis} domain={[desiredMin, desiredMax]} tick={false} axisLine={false} tickLine={false} />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                            dataKey='time'
                            stroke='#000'
                            dot={(props) => {
                                const { cx, cy, payload } = props
                                if (payload.time === minTime) {
                                    return <circle cx={cx} cy={cy} r={4} fill='white' stroke='#facc15' strokeWidth={2} />
                                }
                                return <></>
                            }}
                            activeDot={{ r: 4 }}
                            type='monotone'
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

const events = [
    { year: '2007', title: 'Dick Nichols Devil Rays', description: 'Summer League' },
    { year: '2009', title: 'TXLA', description: 'Austin club' },
    { year: '2010', title: 'Bowie High School', description: 'High school' },
    { year: '2014', title: 'Cal Poly', description: 'NCAA D1' },
    { year: '2018', title: 'Retired', description: 'Career complete' }
]

const SwimmingScreen = () => {
    return (
        <div className='w-full max-w-6xl mx-auto py-8 px-4'>
            <div className='text-4xl font-bold mb-8'>From Man to Fish</div>
            <div className='space-y-6'>
            
                <div className='flex flex-col gap-8 min-h-[24rem] md:h-96 md:flex-row items-center'>
                    <div className={`w-full h-64 md:h-full md:w-1/2 order-1 md:order-2`}>
                        <CustomImage
                            src='/swimming/youngswimmer.jpg'
                            alt='Swimming'
                            className='w-full h-full object-contain rounded-lg shadow-lg bg-blue-300'
                        />
                    </div>
                    <Card className={`w-full md:w-1/2 h-full flex flex-col order-2 md:order-1`}>
                        <CardContent className='pt-6 h-full flex flex-col'>
                            <div className='flex flex-col flex-grow gap-4'>
                                <div className='text-xl font-bold'>Overview</div>
                                <div className='flex-grow'>
                                    {' '}
                                    My swimming career spanned 11 years and ranged 4 different teams. For the more elite portion of my swimming career 2012 -
                                    2018 I spent 20 hours a week training. While swimming kept me in fantastic health and fitness its main rewards were the
                                    friends I made and the mental strategies I gained. I learned that my peak mental health occurs around 150 heart rate. And
                                    the ultimate lesson that can be applied to many aspects of life: "No one will remember the times you went, but everyone will
                                    remember how you made them feel"
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
                        <CustomImage src='/swimming/calpoly1.webp' alt='Swimming' className='w-full h-full object-contain rounded-lg shadow-lg bg-blue-300' />
                    </div>
                    <Card className={`w-full md:w-1/2 h-full flex flex-col order-2 md:order-2`}>
                        <CardContent className='pt-6 h-full flex flex-col'>
                            <div className='flex flex-col flex-grow gap-4'>
                                <div className='text-xl font-bold'>Winter Nationals 2015</div>
                                <div className='flex-grow'>
                                    {' '}
                                    Competed at the Phillips 66 Winter National Championships in Federal Way, WA. Raced the 200 Yard Butterfly and placed 23rd
                                    in the nation. Raced against Michael Phelps who placed 1st. When I was swimming in the warm down pool I saw a bunch of moms
                                    leaning over the railing with sharpies, but it was at this point that I realized I was warming up in Michael Phelps lane.
                                    His feet were massive. I was only 5.67 seconds behind the 23 time Olympic gold medal champion."
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
                        <CustomImage src='/swimming/calpoly2.jpg' alt='Swimming' className='w-full h-full object-contain rounded-lg shadow-lg bg-blue-300' />
                    </div>
                    <Card className={`w-full md:w-1/2 h-full flex flex-col order-2 md:order-1`}>
                        <CardContent className='pt-6 h-full flex flex-col'>
                            <div className='flex flex-col flex-grow gap-4'>
                                <div className='text-xl font-bold'>Cal Poly 200 Butterfly School Record</div>
                                <div className='flex-grow'>
                                    At the mid-season championship meet I swam the school record for the 200 Yard Butterfly. My parents were there and it was
                                    really awesome. Felt really proud of myself that day.
                                </div>
                                <div className='mt-auto flex justify-end'>
                                    <ScootesLink external href=' https://gopoly.com/news/2015/11/22/11_22_2015_5533.aspx'>
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
                            className='w-full h-full object-contain rounded-lg shadow-lg bg-blue-300'
                        />
                    </div>
                    <Card className={`w-full md:w-1/2 h-full flex flex-col order-2 md:order-2`}>
                        <CardContent className='pt-6 h-full flex flex-col'>
                            <div className='flex flex-col flex-grow gap-4'>
                                <div className='text-xl font-bold'>Swimming's gift</div>
                                <div className='flex-grow'>No one will remember the times you went, but everyone will remember how you made them feel.</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <Card className='shadow-md border rounded-md'>
                    <CardContent className='p-6'>
                        <div className='text-xl font-bold'>Team Timeline</div>
                        <div className='p-8'>
                            <HorizontalTimeline events={events} />
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
