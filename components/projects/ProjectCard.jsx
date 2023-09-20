'use client'

import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import ProjectTag from './ProjectTag'

function DivImage({ src, title }) {
  return (
    <div>
      <Image src={src} alt={title} width={520} height={250} className="md:w-1/2 md:max-w-[50%]" />
    </div>
  )
}

function DivDescription({ title, description, tags, align = 'left' }) {
  return (
    <div className="md:w-1/2 md:max-w-[50%]">
      <h3
        className={`${
          align === 'left' ? 'md:text-left' : 'md:text-right'
        } text-lg font-bold md:text-[40px]`}
      >
        {title}
      </h3>
      <div className={`flex ${align === 'left' ? 'md:justify-start' : 'md:justify-end'} gap-3`}>
        {tags.map((t) => (
          <ProjectTag key={t} tag={t} />
        ))}
      </div>
      <p className="my-2 text-justify text-xs font-normal md:my-0 md:mt-5 md:text-base">
        {description}
      </p>
    </div>
  )
}

function ProjectCard({ title, description, image, tags, align = 'left' }) {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` })

  return (
    <div className="relative flex flex-col justify-between md:flex-row md:gap-20">
      {align === 'right' || isMobile ? (
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
