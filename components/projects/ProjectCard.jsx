'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ProjectTag from './ProjectTag'

function DivImage({ src, title, url }) {
  return (
    <div>
      <Link href={url} rel="noopener noreferrer" target="_blank">
        <Image
          src={src}
          alt={title}
          width={520}
          height={250}
          className="h-full w-full object-contain"
        />
      </Link>
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
      <p className="my-2 whitespace-pre-line text-justify text-xs font-normal md:my-0 md:mt-5 lg:text-sm xl:text-base">
        {description}
      </p>
    </div>
  )
}

function ProjectCard({ title, description, image, tags, url, align = 'left' }) {
  return (
    <>
      <div className="hidden md:block">
        {align === 'right' ? (
          <motion.div
            className="relative flex flex-col justify-between md:flex-row md:gap-20"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DivImage src={image} title={title} url={url} />
            <DivDescription title={title} description={description} tags={tags} align={align} />
          </motion.div>
        ) : (
          <motion.div
            className="relative flex flex-col justify-between md:flex-row md:gap-20"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DivDescription title={title} description={description} tags={tags} />
            <DivImage src={image} title={title} url={url} />
          </motion.div>
        )}
      </div>
      <div className="block md:hidden">
        {align === 'right' ? (
          <motion.div
            className="relative flex flex-col justify-between md:flex-row md:gap-20"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DivImage src={image} title={title} url={url} />
            <DivDescription title={title} description={description} tags={tags} align={align} />
          </motion.div>
        ) : (
          <motion.div
            className="relative flex flex-col justify-between md:flex-row md:gap-20"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DivImage src={image} title={title} url={url} />
            <DivDescription title={title} description={description} tags={tags} />
          </motion.div>
        )}
      </div>
    </>
  )
}

export default ProjectCard
