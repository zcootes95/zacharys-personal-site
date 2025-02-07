import { Card, CardContent } from '@/components/ui/card'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import React, { useState } from 'react'
import { butterflyDataOverTime, SwimRaceData } from '@/constants/swimmingdata'
import { individualMedleyDataOverTime } from '@/constants/swimmingdata'

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

            <p className='font-semibold text-sm text-gray-700 mb-2 min-h-[1.25rem]'>
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
                        margin={{ top: 5, right: 0, left: 0, bottom: 20 }}
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
                        <Line dataKey='time' stroke='#000' dot={false} activeDot={{ r: 4 }} type='monotone' strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

const SwimmingScreen = () => {
    return (
        <div className='w-full max-w-6xl mx-auto py-8 px-4'>
            <div className='space-y-6'>
                {/* Swimming Career Overview Card */}
                <Card className='shadow-md border rounded-md'>
                    <CardContent className='p-6'>
                        <h2 className='text-xl font-bold mb-4'>Swimming Career Overview</h2>
                        <p>A summary of your swimming career, highlighting key achievements, milestones, and progression over the years.</p>
                    </CardContent>
                </Card>

                {/* Row with Two Career Highlights Cards */}
                <div className='flex flex-col md:flex-row gap-6'>
                    <Card className='flex-1 shadow-md border rounded-md'>
                        <CardContent className='p-6'>
                            <h3 className='text-lg font-bold mb-2'>Career Highlight 1</h3>
                            <p>Description of the first career highlight...</p>
                        </CardContent>
                    </Card>
                    <Card className='flex-1 shadow-md border rounded-md'>
                        <CardContent className='p-6'>
                            <h3 className='text-lg font-bold mb-2'>Career Highlight 2</h3>
                            <p>Description of the second career highlight...</p>
                        </CardContent>
                    </Card>
                </div>

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
    )
}

export default SwimmingScreen
