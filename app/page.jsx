import Navbar from '@/components/Navbar'
import ContactPage from '@/components/contact/ContactPage'
import EducationPage from '@/components/education/EducationPage'
import HomePage from '@/components/home/HomePage'
import ProjectPage from '@/components/projects/ProjectPage'

export default function Home() {
  return (
    <main className="relative h-full w-full overflow-x-hidden scroll-smooth">
      <Navbar />
      <HomePage />
      <EducationPage />
      <ProjectPage />
      <ContactPage />
    </main>
  )
}

