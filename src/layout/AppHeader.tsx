import { CustomImage } from '@/components/common/CustomImage'
import { ScootesLink } from '@/components/common/ScootesLink'
import { Separator } from '@radix-ui/react-separator'

export const AppHeader = () => {
    return (
        <>
            <header className='w-full border-b bg-background'>
                <div className='flex container mx-auto max-w-6xl py-2 align-center'>
                    <div className='h-16 w-16 scale-x-[-1] rounded-xl'>
                        <CustomImage src='/home/scooter.png' className='rounded-xl' />
                    </div>
                    <div className='flex-1' />
                    <ScootesLink to='/' className='!no-underline !text-inherit hover:!text-inherit'>
                        <div className='leading-[4rem] text-2xl'>Zachary Cootes</div>
                    </ScootesLink>
                    <div className='flex-1' />
                    <div className='h-16 w-16 rounded-xl'>
                        <CustomImage src='/home/scooter.png' className='rounded-xl' />
                    </div>
                </div>
            </header>
            <Separator orientation='horizontal' className='bg-slate-200 h-[1px]' />
        </>
    )
}
