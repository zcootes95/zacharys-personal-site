import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { LazyRoute } from './LazyRoute'
import AppLayout from '@/layout/AppLayout'
import HomeScreen from '@/pages/HomeScreen'
import ErrorScreen from '@/pages/system/ErrorScreen'

const ProjectsScreen = lazy(() => import('@/pages/ProjectsScreen'))
const ContactScreen = lazy(() => import('@/pages/ContactScreen'))
const AsciiArtScreen = lazy(() => import('@/pages/AsciiArtScreen'))
const SwimmingScreen = lazy(() => import('@/pages/SwimmingScreen'))
const QuesoScreen = lazy(() => import('@/pages/QuesoScreen'))

export const AppRouter = createBrowserRouter(
    [
        {
            path: '/',
            element: <AppLayout />,
            children: [
                {
                    index: true,
                    element: <HomeScreen />
                },
                {
                    path: 'projects',
                    element: <LazyRoute Component={ProjectsScreen} />
                },

                {
                    path: 'contact',
                    element: <LazyRoute Component={ContactScreen} />
                },
                {
                    path: 'ascii-art',
                    element: <LazyRoute Component={AsciiArtScreen} />
                },
                {
                    path: 'swimming',
                    element: <LazyRoute Component={SwimmingScreen} />
                },
                {
                    path: 'queso',
                    element: <LazyRoute Component={QuesoScreen} />
                }
            ],
            errorElement: <ErrorScreen />
        }
    ],
    {
        future: {
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_relativeSplatPath: true,
            v7_skipActionErrorRevalidation: true
        }
    }
)
