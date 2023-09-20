import Scroller from './Scroller'

function HomePage() {
  return (
    <section
      className="relative flex h-[calc(100vh-100px)] items-center justify-center px-[200px]"
      id="home"
    >
      <div className="pb-16 text-3xl font-semibold">
        <p className="mb-2">
          Hello, je suis <span className="text-primary">Alexis Gadbin</span>,
        </p>
        <p className="mt-2">Étudiant passioné de développement web</p>
      </div>
      <div className="absolute bottom-20 right-1/2 -translate-x-1/2">
        <Scroller />
      </div>
    </section>
  )
}

export default HomePage
