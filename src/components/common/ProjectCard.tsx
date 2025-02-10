import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

interface ProjectCardProps {
    title: string
    description: string
    leftColumn: {
        content?: React.ReactNode
    }
    rightColumn: {
        content: React.ReactNode
    }
    footerContent?: React.ReactNode
}

const ProjectCard = ({ title, description, leftColumn, rightColumn, footerContent }: ProjectCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col md:flex-row gap-6 md:p-4'>
                    <div className='flex-1'>{leftColumn.content}</div>
                    <div className='flex-1'>{rightColumn.content}</div>
                </div>
            </CardContent>
            {footerContent && <CardFooter>{footerContent}</CardFooter>}
        </Card>
    )
}

export default ProjectCard
