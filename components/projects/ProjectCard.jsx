import Image from 'next/image'
import ProjectTag from './ProjectTag'

function DivImage({ src, title }) {
  return (
    <div className="w-1/2 max-w-[50%]">
      <Image src={src} alt={title} width={520} height={250} />
    </div>
  )
}

function DivDescription({ title, description, tags, align = 'left' }) {
  return (
    <div className="w-1/2 max-w-[50%]">
      <h3 className={`${align === 'left' ? 'text-left' : 'text-right'} text-[40px] font-bold`}>
        {title}
      </h3>
      <div className={`flex ${align === 'left' ? 'justify-start' : 'justify-end'} gap-3`}>
        {tags.map((t) => (
          <ProjectTag key={t} tag={t} />
        ))}
      </div>
      <p className="text-normal mt-5 text-justify font-normal">{description}</p>
    </div>
  )
}

function ProjectCard({ title, description, image, tags, align = 'left' }) {
  return (
    <div className="relative flex justify-between gap-20">
      {align === 'right' ? (
        <>
          <DivImage src={image} title={title} />
          <DivDescription title={title} description={description} tags={tags} align={align} />
        </>
      ) : (
        <>
          <DivDescription title={title} description={description} tags={tags} />

          <DivImage src={image} title={title} />
        </>
      )}
    </div>
  )
}

export default ProjectCard
