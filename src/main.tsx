import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorScreen } from './pages/ErrorScreen.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary FallbackComponent={ErrorScreen}>
            <App />
        </ErrorBoundary>
    </StrictMode>
)
