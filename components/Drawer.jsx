'use client'

import Image from 'next/image'
import Link from 'next/link'

function Drawer({ isOpen, setIsOpen }) {
  return (
    <section
      className={`fixed right-0 z-[999] flex h-screen flex-col items-center justify-center overflow-hidden bg-white transition-all ${
        isOpen ? 'w-screen' : 'w-0'
      }`}
    >
      <Image
        width={30}
        height={30}
        src="icons/cross.svg"
        alt="Close"
        onClick={() => setIsOpen(false)}
        className="absolute right-4 top-4 cursor-pointer"
      />
      {isOpen && (
        <Image
          alt="Alexis Gadbin logo"
          src="logo.svg"
          width={50}
          height={50}
          className="fixed top-14"
        />
      )}
      <ul className="flex flex-col gap-10 text-center text-3xl font-medium">
        <li>
          <Link href="#home" onClick={() => setIsOpen(false)}>
            Accueil
          </Link>
        </li>
        <li>
          <Link href="#education" onClick={() => setIsOpen(false)}>
            Parcours
          </Link>
        </li>
        <li>
          <Link href="#projects" onClick={() => setIsOpen(false)}>
            Projet
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Drawer
