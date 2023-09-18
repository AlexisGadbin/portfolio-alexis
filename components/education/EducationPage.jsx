import Title from '../Title'
import Experiences from './Experiences'
import LogoList from './LogoList'

function EducationPage() {
  return (
    <section className="h-screen bg-primary-950 px-[200px]">
      <Title title="Parcours" />

      <div className="mt-20 flex justify-between">
        <Experiences />
        <LogoList />
      </div>
    </section>
  )
}

export default EducationPage
