'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { X, ExternalLink, Github } from 'lucide-react'
import GlassContainer from '@/components/ui/GlassContainer'

function ItemInfoPanel({ item, mode, onClose }) {
  return (
    <motion.div
      className="absolute bottom-20 left-4 right-4 z-20 md:bottom-auto md:left-auto md:right-8 md:top-1/2 md:w-80 md:-translate-y-1/2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
    >
      <GlassContainer preset="panel">
        <div className="relative p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-2 top-2 rounded-full p-1 text-dark/50 transition-colors hover:bg-dark/10 hover:text-dark"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="mb-4 flex items-center gap-4">
            <Image
              src={item.iconPath}
              alt={item.name}
              width={56}
              height={56}
              className="h-14 w-14 rounded-2xl object-contain"
            />
            <div>
              <h3 className="text-lg font-semibold text-dark">{item.name}</h3>
              {item.tagline && (
                <p className="text-sm text-dark/60">{item.tagline}</p>
              )}
            </div>
          </div>

          {/* Description */}
          {item.description && (
            <p className="mb-4 text-sm leading-relaxed text-dark/70">
              {item.description}
            </p>
          )}

          {/* Tech stack (apps mode only) */}
          {mode === 'apps' && item.tech && (
            <div className="mb-4 flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links (apps mode only) */}
          {mode === 'apps' && (
            <div className="flex gap-3">
              {(item.appStoreUrl || item.url || item.testflightUrl) && (
                <a
                  href={item.appStoreUrl || item.url || item.testflightUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-600"
                >
                  <ExternalLink size={16} />
                  Voir
                </a>
              )}
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl bg-dark/10 px-4 py-2.5 text-dark transition-colors hover:bg-dark/20"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          )}
        </div>
      </GlassContainer>
    </motion.div>
  )
}

export default ItemInfoPanel
