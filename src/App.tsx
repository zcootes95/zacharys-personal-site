import { RouterProvider } from 'react-router-dom'
import './index.css'
import { AppRouter } from './lib/router'

const App = () => {
    return (
        <div>
            <RouterProvider router={AppRouter} />
        </div>
    )
}

export default App
