import { ComponentType } from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div>
            <header className='bg-green-800 p-20 shadow-md'>
                <h1 className='text-foreground'>Header SS111</h1>
                <h3 className='text-red-500'>This is green text.</h3>
            </header>
            <main className='flex-1 p-4'>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout
