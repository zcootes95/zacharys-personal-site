import React from 'react'

interface Event {
    year: string
    title: string
    description?: string
}

interface TimelineProps {
    events: Event[]
}

export const ResponsiveTimeline: React.FC<TimelineProps> = ({ events }) => (
    <div className='relative pt-4'>
        {/* Horizontal line for medium+ screens */}
        <div className='hidden md:block absolute top-8 left-0 right-0 border-t border-gray-300 dark:border-gray-700 z-0' />
        {/* Vertical line for small screens */}
        <div className='md:hidden absolute left-8 top-0 bottom-0 border-l border-gray-300 dark:border-gray-700 z-0' />
        <div className='flex flex-col md:flex-row md:justify-between'>
            {events.map((event, idx) => (
                <div key={idx} className='flex items-start md:flex-col md:items-center relative px-4 mb-8 md:mb-0'>
                    <div className='w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-gray-900 z-10' />
                    <div className='ml-4 md:ml-0 md:text-center'>
                        <time className='text-sm font-medium text-gray-500 dark:text-gray-400'>{event.year}</time>
                        <h3 className='mt-1 text-lg font-semibold text-gray-900 dark:text-white'>{event.title}</h3>
                        {event.description && <p className='mt-1 text-base font-normal text-gray-500 dark:text-gray-400'>{event.description}</p>}
                    </div>
                </div>
            ))}
        </div>
    </div>
)
