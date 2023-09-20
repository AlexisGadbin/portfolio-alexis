'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Drawer from './Drawer'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 z-50 hidden h-[80px] w-full items-center justify-between bg-white bg-opacity-90 px-[100px] md:flex">
        <div className="flex items-center gap-9">
          <Image src="/logo.svg" height={55} width={49} alt="Alexis Gadbin logo" />
          <span className="text-[22px] font-bold">Alexis Gadbin</span>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-[22px] text-xl font-medium">
            <li>
              <Link href="#home">Accueil</Link>
            </li>
            <li>
              <Link href="#education">Parcours</Link>
            </li>
            <li>
              <Link href="#projects">Projets</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="fixed top-0 z-50 flex h-[80px] w-screen items-center justify-between bg-white bg-opacity-90 px-4 md:hidden">
        <Image src="/logo.svg" height={56} width={62} alt="Alexis Gadbin logo" />
        <button type="button" onClick={() => setIsOpen(true)}>
          <Image src="/icons/burger.svg" height={30} width={40} alt="Menu" />
        </button>
      </nav>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Navbar
