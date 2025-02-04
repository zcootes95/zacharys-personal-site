import { Suspense } from 'react'

export const LazyRoute = ({ Component }: { Component: React.ComponentType }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component />
        </Suspense>
    )
}
