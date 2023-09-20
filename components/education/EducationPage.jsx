import Title from '../Title'
import Experiences from './Experiences'
import LogoList from './LogoList'

function EducationPage() {
  return (
    <section className=" bg-primary-950 px-12 md:h-screen md:px-[200px]" id="education">
      <Title title="Parcours" />

      <div className="mt-10 flex flex-col justify-between gap-16 md:mt-20 md:flex-row md:gap-0">
        <Experiences />
        <LogoList />
      </div>
    </section>
  )
}

export default EducationPage
