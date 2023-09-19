import Title from '../Title'
import ProjectCard from './ProjectCard'

function ProjectPage() {
  return (
    <section className="px-[200px]">
      <Title title="Projets" color="dark" />
      <div className="mt-20 flex w-full flex-col gap-24">
        <ProjectCard
          title="Portfolio"
          description="Ce projet est le résultat d’un tutoriel youtube
          afin d’avoir une introduction à threejs et à
          l’utilisation des modèles 3D sur le web"
          image="/assets/projects/3d-portfolio.png"
          tags={['React', 'Tailwind', 'Threejs']}
          align="right"
        />
        <ProjectCard
          title="Portfolio"
          description="Ce projet est le résultat d’un tutoriel youtube
          afin d’avoir une introduction à threejs et à
          l’utilisation des modèles 3D sur le web"
          image="/assets/projects/3d-portfolio.png"
          tags={['React', 'Tailwind', 'Threejs']}
        />
      </div>
    </section>
  )
}

export default ProjectPage
