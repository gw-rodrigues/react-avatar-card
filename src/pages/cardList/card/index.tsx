import { useContextSelector } from 'use-context-selector'
import { CardContext } from '../../../contexts/CardContext'

import AvatarLogo from '../../../assets/avatar-logo.png'
import { Rating } from '../../../components/Rating'

export function Card() {
  const movies = useContextSelector(CardContext, (context) => context.movie)

  return (
    <article className="h-[450px] w-80 rounded-2xl shadow-xl overflow-hidden relative [&>div]:hover:before:bottom-[0px] [&>div>img]:hover:blur-sm [&>div>img]:hover:translate-y-[-25px] [&>section]:hover:bottom-10">
      <div className="relative overflow-hidden content-none before:absolute before:bottom-[-100px] before:w-full before:h-full before:transition-all before:duration-500 before:z-10 before:bg-gradient-to-b before:from-sky-700/0 before:via-sky-700 before:to-sky-700/100 ">
        <img
          src={`${movies.urls.posterURL}/${movies.poster_path}`}
          alt="Poster"
          className="w-full h-auto transition-all duration-500 scale-125"
        />
      </div>
      <section className="absolute bottom-0 left-0 z-20 flex flex-col w-full gap-2 p-5 transition-all duration-500 ">
        <img src={AvatarLogo} alt="Avatar logo" className="max-w-[180px]" />
        <h3 className="text-sm font-bold text-white">{movies.title}</h3>
        <Rating value={movies.vote_average} />
      </section>
    </article>
  )
}
