import { foxtailTechnologiesData } from '@/constants/projects/technologyData'
import { CustomImage } from '../common/CustomImage'
import ParallaxCard from '../common/ParallaxCard'
import { LinkButton } from '../common/ScootesLink'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import { ProjectData } from '@/constants/projects/projectData'

type ProjectCardProps = {
    project: ProjectData
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const { description, name, roles, technologies, link, projectImagePath } = project
    return (
        <Card className='mb-8'>
            <CardHeader>
                <CardTitle className='text-xl'>{name}</CardTitle>
                <CardDescription className='text-md'>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col md:flex-row gap-6 md:p-4'>
                    <div className='w-full md:w-1/5 rounded-md'>
                        <CustomImage className='w-full max-h-48 object-contain aspect-auto rounded-md ' src={projectImagePath} alt='Project logo' />
                    </div>
                    <div className='flex-2'>
                        {' '}
                        <>
                            <div className='text-md mb-4 font-semibold'>My Role & Highlights</div>
                            <ul className='list-none'>
                                {roles.map((role) => (
                                    <li key={role}>• {role}</li>
                                ))}
                            </ul>
                        </>
                    </div>
                </div>
                <div className='mx-auto px-4 flex flex-col gap-4 mt-4'>
                    <div className='text-md font-semibold mb-4'>Technologies</div>
                    <div className='flex flex-row flex-wrap gap-6'>
                        {technologies.map((item) => (
                            <div key={item.name} className='flex flex-col items-center gap-2'>
                                <ParallaxCard>
                                    <div className='w-20 aspect-square rounded-md border-4 border-white'>
                                        <CustomImage src={item.imagePath} className='w-20 h-full object-contain rounded-md shadow-lg bg-secondary' />
                                    </div>
                                </ParallaxCard>
                                <div className='text-sm'>{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
            {link && (
                <CardFooter className='flex justify-end mt-4'>
                    <LinkButton external href={link} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-sm rounded'>
                        Check it out
                    </LinkButton>
                </CardFooter>
            )}
        </Card>
    )
}
