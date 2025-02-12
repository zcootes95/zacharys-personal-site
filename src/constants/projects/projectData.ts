import { foxtailTechnologiesData, pennyroyalTechnologiesData, TechnologyData } from './technologyData'

export type ProjectData = {
    name: string
    description: string
    roles: string[]
    link?: string
    technologies: TechnologyData[]
}
export const projectData: ProjectData[] = [
    {
        name: 'Foxtail AI',
        description:
            'B2C solution that empowers online resellers to create and manage listings across multiple e-commerce platforms—reducing listing overhead, increasing reseller profitability ( Facebook Marketplace, eBay, Poshmark, Mercari, Depop, and Etsy)',
        roles: [
            'Co-founded startup enabling multi-platform e-commerce listings (secured 2 funding rounds)',
            `iOS (4.4 ★), Android, and Web app`,
            'Generated 130K+ listings and managed $3.3M inventory',
            'Built cross-platform Web, iOS, and Android apps with React/React Native',
            'Automated ~10K daily tasks via 48 integration scripts (Etsy, Mercari, Poshmark, eBay, Depop, FB Marketplace)',
            'Optimized frontend for 20K+ documents using Redux and DOM virtualization',
            'Ensured stable production for 150+ users through proactive error monitoring (Sentry, screen recording, GCP logging)',
            'Accelerated listing creation with ~20-second AI-powered generation'
        ],
        link: 'https://foxtail.ai/',
        technologies: foxtailTechnologiesData
    },
    {
        name: 'Pennyroyal',
        description: '  AI-powered image-generation site, enabling users to purchase custom pet merchandise featuring AI-stylized photos.',
        roles: [
            'Developed site using TypeScript, React, and Redux, enabling the purchase of custom pet merchandise.',
            'Integrated Midjourney to transform user-submitted pet images into unique, AI-stylized designs.',
            'Designed and Implemented full user flow for selecting, designing, and purchasing pet merchandise.'
        ],
        technologies: pennyroyalTechnologiesData
    }
]
