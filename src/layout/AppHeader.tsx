import { ScootesLink } from '@/components/common/ScootesLink'
import { Separator } from '@radix-ui/react-separator'

export const AppHeader = () => {
    return (
        <>
            <header className=' w-full border-b bg-background'>
                <div className='flex container mx-auto max-w-6xl px-2 py-2 align-center'>
                    <div className='flex-1' />

                    <ScootesLink to='/' className='!no-underline !text-inherit hover:!text-inherit'>
                        <h2 className='leading-[4rem]'>Zachary Cootes</h2>
                    </ScootesLink>
                    <div className='flex-1' />
                </div>
            </header>
            <Separator orientation='horizontal' className='bg-slate-200 h-[1px]' />
        </>
    )
}
