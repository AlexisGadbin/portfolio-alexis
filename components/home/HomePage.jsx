import CrossedOut from './CrossedOut'
import Scroller from './Scroller'

function HomePage() {
  return (
    <section
      className="relative flex h-[calc(100vh-100px)] items-center justify-center md:px-[75px] lg:px-[100px] xl:px-[200px]"
      id="home"
    >
      <div className="pb-16 text-base font-semibold md:text-3xl">
        <p className="mb-2">
          Hello, je suis <span className="text-primary">Alexis Gadbin</span>,
        </p>
        <p className="mt-2 whitespace-nowrap">
          <span className="relative inline-flex">
            Étudiant
            <CrossedOut className="animate-dash absolute left-1/2 h-auto w-full -translate-x-1/2 translate-y-2" />
          </span>
          &nbsp; passionné de développement web
        </p>
      </div>
      <div className="absolute bottom-20">
        <Scroller />
      </div>
    </section>
  )
}

export default HomePage
