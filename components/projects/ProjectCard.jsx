'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectTag from './ProjectTag'

function LinkWrapper({ href, children }) {
  return (
    <Link
      className="bg bg-primary-50 hover:bg-primary-100 rounded-full p-2 transition-colors duration-300"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </Link>
  )
}
function DivImage({ src, title, url, githubUrl }) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={title}
        width={520}
        height={250}
        className="h-full w-full object-contain"
      />
      <div className="absolute top-2 right-2 flex flex-col">
        <LinkWrapper href={url}>
          <ExternalLink className="text-primary h-5 w-5" />
        </LinkWrapper>
        {githubUrl && (
          <LinkWrapper href={githubUrl}>
            <Github className="text-primary h-5 w-5" />
          </LinkWrapper>
        )}
      </div>
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
      <p className="my-2 text-justify text-xs font-normal whitespace-pre-line md:my-0 md:mt-5 lg:text-sm xl:text-base">
        {description}
      </p>
    </div>
  )
}

function ProjectCard({ title, description, image, tags, url, githubUrl, align = 'left' }) {
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
            <DivImage src={image} title={title} url={url} githubUrl={githubUrl} />
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
            <DivImage src={image} title={title} url={url} githubUrl={githubUrl} />
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
            <DivImage src={image} title={title} url={url} githubUrl={githubUrl} />
            <DivDescription title={title} description={description} tags={tags} align={align} />
          </motion.div>
        ) : (
          <motion.div
            className="relative flex flex-col justify-between md:flex-row md:gap-20"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DivImage src={image} title={title} url={url} githubUrl={githubUrl} />
            <DivDescription title={title} description={description} tags={tags} />
          </motion.div>
        )}
      </div>
    </>
  )
}

export default ProjectCard

