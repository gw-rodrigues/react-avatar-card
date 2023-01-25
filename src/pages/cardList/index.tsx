import { useContextSelector } from 'use-context-selector'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { CardContext } from '../../contexts/CardContext'
import { Card } from './card'

export function CardList() {
  const backgroundImg = useContextSelector(
    CardContext,
    (context) =>
      `${context.movie.urls.bannerURL}/${context.movie.backdrop_path}`,
  )

  return (
    <main className="flex flex-col items-center gap-20 py-20 min-w-full min-h-screen text-base bg-gradient-to-b from-sky-500 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 z-0 w-auto landscape:w-full min-h-full text-center after:z-10 after:w-full after:min-h-full after:top-0 after:left-0 after:absolute after:bg-gradient-to-b after:from-slate-900/70 after:via-slate-900/100 after:to-slate-900">
        <img
          className="max-w-none landscape:w-full portrait:w-auto  min-h-full relative"
          src={backgroundImg}
          alt="Movie Poster"
        />
      </div>
      <Header />
      <Card />
      <Footer />
    </main>
  )
}
