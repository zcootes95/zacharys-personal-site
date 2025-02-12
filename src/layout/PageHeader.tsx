import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

type PageHeaderProps = {
    title: string
}

export const PageHeader = (props: PageHeaderProps) => {
    return (
        <div className='flex flex-row items-center mb-8'>
            <div className='text-4xl font-bold '>{props.title}</div>
            <div className='flex-grow' />
            <div>
                <Button asChild variant='default'>
                    <Link to='/'>
                        <div className='flex flex-row items-center gap-2'>
                            <ChevronLeft className='h-4' strokeWidth={3} />
                            <div>Back</div>
                        </div>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
