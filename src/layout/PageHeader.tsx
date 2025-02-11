import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

type PageHeaderProps = {
    title: string
}

export const PageHeader = (props: PageHeaderProps) => {
    return (
        <div className='flex flex-row items-center mb-8'>
            <div className='text-4xl font-bold '>{props.title}</div>
            <div className='flex-grow' />
            <div>
                <Link to='/' className='mt-self-end bg-blue-500 hover:bg-blue-700 text-white p-2 text-sm rounded inline-block text-center pr-4'>
                    <div className='flex flex-row items-center gap-2'>
                        <ChevronLeft className='h-4' strokeWidth={3} />
                        <div>Back</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
