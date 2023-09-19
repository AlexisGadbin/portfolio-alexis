import Navbar from '@/components/Navbar'
import EducationPage from '@/components/education/EducationPage'
import HomePage from '@/components/home/HomePage'
import ProjectPage from '@/components/projects/ProjectPage'

export default function Home() {
  return (
    <main className="relative h-full w-full">
      <Navbar />
      <HomePage />
      <EducationPage />
      <ProjectPage />
    </main>
  )
}
