import { ProjectCard } from '@/components/projects/ProjectCard'
import { projectData } from '@/constants/projects/projectData'
import { PageHeader } from '@/layout/PageHeader'

const ProjectsScreen = () => {
    return (
        <div>
            <PageHeader title='Projects' />
            {projectData.map((project) => (
                <ProjectCard project={project} />
            ))}
        </div>
    )
}

export default ProjectsScreen
