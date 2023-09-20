import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex h-[80px] w-full items-center justify-between bg-white bg-opacity-90 px-[100px]">
      <div className="flex items-center gap-9">
        <Image src="/logo.svg" height={55} width={49} />
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
  )
}

export default Navbar
