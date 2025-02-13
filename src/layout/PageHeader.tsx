import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

type PageHeaderProps = {
    title: string
}

export const PageHeader = (props: PageHeaderProps) => {
    return (
        <div className='flex flex-row items-center mb-8'>
            <div>
                <Button asChild variant='ghost' size={'icon'} className='justify-center'>
                    <Link to='/'>
                        <div className='flex flex-row items-center gap-2'>
                            <ArrowLeft strokeWidth={3} />
                        </div>
                    </Link>
                </Button>
            </div>
            <div className='text-4xl font-bold '>{props.title}</div>
        </div>
    )
}
