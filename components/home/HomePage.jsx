import { Fragment } from 'react'
import CrossedOut from './CrossedOut'
import Scroller from './Scroller'

function HomePage() {
  return (
    <>
      <div className="animate-move-left absolute top-20 flex flex-none gap-8 bg-primary-500/20 py-1 pr-8 text-center text-black/50 [animation-delay:2s] [animation-duration:20s] md:[animation-duration:30s]">
        {[...new Array(2)].fill(0).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={`wip-banner-${index}`}>
            <div className="inline-flex items-center gap-8">
              <span className="whitespace-nowrap">
                Une version 2 de ce portfolio est en cours de développement, où vous retrouverez
                notamment mon blog, et plus de détails sur mes projets. Restez connectés, une
                preview sera bientôt disponible !
              </span>
              <span>🚧</span>
            </div>
          </Fragment>
        ))}
      </div>

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
    </>
  )
}

export default HomePage
