import projects from '@/data/projects.json'
import Title from '../Title'
import ProjectCard from './ProjectCard'

function ProjectPage() {
  return (
    <section
      className="px-12 md:px-[75px] lg:px-[100px] xl:px-[200px] 2xl:px-[400px]"
      id="projects"
    >
      <Title title="Projets" color="dark" />
      <div className="mt-10 flex w-full flex-col gap-10 overflow-hidden md:mt-20 md:gap-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            url={project.url}
            align={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectPage
