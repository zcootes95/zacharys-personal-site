import { Outlet } from 'react-router-dom'
import { AppHeader } from './AppHeader'
import { AppFooter } from './AppFooter'

const AppLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <AppHeader />
            <main className='flex-grow'>
                <div className='container mx-auto max-w-6xl py-8 pr-8'>
                    <Outlet />
                </div>
            </main>
            <AppFooter />
        </div>
    )
}

export default AppLayout
