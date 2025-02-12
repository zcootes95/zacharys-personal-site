import { SwimRaceData } from '@/constants/swimming/swimmingdata'
import { convertTimeToSeconds } from '@/utils/swimming/convertTimeToSeconds'
import { formatDate } from '@/utils/swimming/fomatDate'
import { formatDateXAxis } from '@/utils/swimming/formatDateXAxis'
import { formatSeconds } from '@/utils/swimming/formatSeconds'
import { formatSecondsYAxis } from '@/utils/swimming/formatSecondsYAxis'
import { parseDate } from '@/utils/swimming/parseDate'
import { ChartRaceData } from '@/utils/swimming/types'
import { useState } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import { CustomTooltip } from './CustomTooltip'

type SwimmingProgressionChartProps = {
    title: string
    data: SwimRaceData[]
}

export const SwimmingProgressionChart = (props: SwimmingProgressionChartProps) => {
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
            <h1 className='text-2xl font-bold text-gray-900 mb-2'>{props.title}</h1>

            <div className='flex items-center text-lg font-semibold text-gray-900'>
                <div>{hoveredData ? formatSeconds(hoveredData.time) : formatSeconds(minTime)}</div>
                {!hoveredData && (
                    <div className='ml-4 inline-block px-3 py-1 text-xs font-medium bg-yellow-400 text-gray-700 rounded-full'>Personal Best ★</div>
                )}
            </div>

            <div className='font-semibold text-sm text-gray-700 mb-4 whitespace-nowrap'>
                {hoveredData
                    ? `${hoveredData.meetName}, ${formatDate(hoveredData.date)}`
                    : bestTimeEntry
                    ? `${bestTimeEntry.meetName}, ${formatDate(bestTimeEntry.date)}`
                    : ''}
            </div>

            <div className='w-full h-96'>
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart
                        data={chartData}
                        margin={{ top: 5, right: 10, left: 10, bottom: 20 }}
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
                            interval={'preserveStartEnd'}
                        />
                        <YAxis width={1} tickFormatter={formatSecondsYAxis} domain={[desiredMin, desiredMax]} tick={false} axisLine={false} tickLine={false} />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                            dataKey='time'
                            stroke='#000'
                            dot={(props) => {
                                const { cx, cy, payload } = props
                                if (payload.time === minTime) {
                                    return <circle cx={cx} cy={cy} r={4} fill='white' stroke='#facc15' strokeWidth={2} key={payload.time + Math.random()} />
                                }
                                return <div key={payload.time + Math.random()} />
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
