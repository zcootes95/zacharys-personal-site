import React from 'react'

interface Event {
    year: string
    title: string
    description?: string
}

interface TimelineProps {
    events: Event[]
}

const HorizontalTimeline: React.FC<TimelineProps> = ({ events }) => (
    <div className='relative pt-4'>
        <div className='absolute top-8 left-0 right-0 border-t border-gray-300 dark:border-gray-700 z-0' />
        <div className='flex justify-between'>
            {events.map((event, idx) => (
                <div key={idx} className='flex flex-col items-center'>
                    <div className='w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-gray-900 relative z-10' />
                    <time className='mt-2 text-sm font-medium text-gray-500 dark:text-gray-400'>{event.year}</time>
                    <h3 className='mt-1 text-lg font-semibold text-gray-900 dark:text-white'>{event.title}</h3>
                    {event.description && <p className='mt-1 text-base font-normal text-gray-500 dark:text-gray-400'>{event.description}</p>}
                </div>
            ))}
        </div>
    </div>
)

export default HorizontalTimeline
