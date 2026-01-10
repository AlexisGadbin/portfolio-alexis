'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
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

function BetaButton({ onClick, children }) {
  return (
    <button
      className="bg bg-primary-50 hover:bg-primary-100 rounded-full p-2 transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function BetaModal({ isOpen, onClose, title }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 mx-4 max-w-md shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{title}</h3>
              <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Ce projet est actuellement en version bêta. Contactez-moi si vous souhaitez y accéder !
            </p>
            <a
              href="#contact"
              onClick={onClose}
              className="block w-full text-center bg-primary text-white py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              Me contacter
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function DivImage({ src, title, url, githubUrl, beta, onBetaClick }) {
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
        {beta ? (
          <BetaButton onClick={onBetaClick}>
            <ExternalLink className="text-primary h-5 w-5" />
          </BetaButton>
        ) : (
          <LinkWrapper href={url}>
            <ExternalLink className="text-primary h-5 w-5" />
          </LinkWrapper>
        )}
        {githubUrl && (
          <LinkWrapper href={githubUrl}>
            <Github className="text-primary h-5 w-5" />
          </LinkWrapper>
        )}
      </div>
    </div>
  )
}

function DivDescription({ title, description, tags, icon, align = 'left' }) {
  return (
    <div className="md:w-1/2 md:max-w-[50%]">
      <div
        className={`flex items-center gap-3 ${
          align === 'left' ? 'md:justify-start' : 'md:justify-end'
        }`}
      >
        {icon && (
          <Image
            src={icon}
            alt={`${title} icon`}
            width={48}
            height={48}
            className="rounded-xl"
          />
        )}
        <h3 className="text-lg font-bold md:text-[40px]">{title}</h3>
      </div>
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

function ProjectCard({ title, description, image, icon, tags, url, githubUrl, beta, align = 'left' }) {
  const [showBetaModal, setShowBetaModal] = useState(false)

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
            <DivImage src={image} title={title} url={url} githubUrl={githubUrl} beta={beta} onBetaClick={() => setShowBetaModal(true)} />
            <DivDescription title={title} description={description} tags={tags} icon={icon} align={align} />
          </motion.div>
        ) : (
          <motion.div
            className="relative flex flex-col justify-between md:flex-row md:gap-20"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DivDescription title={title} description={description} tags={tags} icon={icon} />
            <DivImage src={image} title={title} url={url} githubUrl={githubUrl} beta={beta} onBetaClick={() => setShowBetaModal(true)} />
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
            <DivImage src={image} title={title} url={url} githubUrl={githubUrl} beta={beta} onBetaClick={() => setShowBetaModal(true)} />
            <DivDescription title={title} description={description} tags={tags} icon={icon} align={align} />
          </motion.div>
        ) : (
          <motion.div
            className="relative flex flex-col justify-between md:flex-row md:gap-20"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DivImage src={image} title={title} url={url} githubUrl={githubUrl} beta={beta} onBetaClick={() => setShowBetaModal(true)} />
            <DivDescription title={title} description={description} tags={tags} icon={icon} />
          </motion.div>
        )}
      </div>
      <BetaModal isOpen={showBetaModal} onClose={() => setShowBetaModal(false)} title={title} />
    </>
  )
}

export default ProjectCard

