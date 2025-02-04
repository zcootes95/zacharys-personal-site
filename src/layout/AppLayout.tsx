import { ComponentType } from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div className='flex flex-col items-center bg-green-200'>
            <div>Header</div>
            <Outlet />
        </div>
    )
}

export default AppLayout
