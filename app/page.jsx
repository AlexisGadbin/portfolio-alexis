import Navbar from '@/components/Navbar'
import EducationPage from '@/components/education/EducationPage'
import HomePage from '@/components/home/HomePage'

export default function Home() {
  return (
    <main className="relative h-full w-full">
      <Navbar />
      <HomePage />
      <EducationPage />
    </main>
  )
}
