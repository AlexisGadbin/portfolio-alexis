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
        <p className="mt-2">Étudiant passioné de développement web</p>
      </div>
      <div className="absolute bottom-20">
        <Scroller />
      </div>
    </section>
  )
}

export default HomePage
