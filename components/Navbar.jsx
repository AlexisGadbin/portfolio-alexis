import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'
import GlassContainer from './ui/GlassContainer'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/AlexisGadbin',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alexis-gadbin/',
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: 'mailto:alexis@gadbin.com?subject=%5BContact%5D%20-%20Portfolio',
    icon: Mail,
  },
]

function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <GlassContainer preset="navbar">
        <div className="flex items-center gap-6 px-6 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              height={36}
              width={32}
              alt="Alexis Gadbin logo"
            />
            <span className="text-sm font-bold md:text-base">Alexis Gadbin</span>
          </div>
          <div className="hidden h-6 w-px bg-dark/20 md:block" />
          <div className="hidden items-center gap-3 md:flex">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-dark/60 transition-colors hover:bg-dark/10 hover:text-primary"
                title={link.name}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </GlassContainer>
    </nav>
  )
}

export default Navbar
