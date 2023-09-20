import Title from '../Title'
import ProjectCard from './ProjectCard'
import projects from '@/data/projects.json'

function ProjectPage() {
  return (
    <section className="px-12 md:px-[200px]" id="projects">
      <Title title="Projets" color="dark" />
      <div className="mt-20 flex w-full flex-col gap-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            align={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectPage
