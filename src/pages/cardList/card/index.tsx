import { useContextSelector } from 'use-context-selector'
import { CardContext } from '../../../contexts/CardContext'

import AvatarLogo from '../../../assets/avatar-logo.png'
import { Rating } from '../../../components/Rating'
import { Genres } from '../../../components/Genres'
import { Cast } from '../../../components/Cast'

export function Card() {
  const movies = useContextSelector(CardContext, (context) => context.movie)

  if (!movies) return null

  return (
    <article className="h-[450px] w-80 rounded-2xl shadow-xl overflow-hidden relative [&>div]:hover:before:bottom-[0px] [&>div>img]:hover:blur-sm [&>div>img]:hover:translate-y-[-25px] [&>section]:hover:bottom-0">
      <div className="relative overflow-hidden content-none before:absolute before:bottom-[-100px] before:w-full before:h-full before:transition-all before:duration-500 before:z-10 before:bg-gradient-to-b before:from-sky-700/0 before:via-sky-700 before:to-sky-700/100 ">
        <img
          src={`${movies.urls.posterURL}/${movies.poster_path}`}
          alt="Poster"
          className="w-full h-auto transition-all duration-500 scale-125"
        />
      </div>
      <section className="absolute -bottom-[193px] left-0 z-20 flex flex-col w-full gap-2 p-5 transition-all duration-500 text-white">
        <header>
          <a
            href={movies.homepage}
            target="_blank"
            className="cursor-pointer text-white hover:text-sky-300 transition-all [&>h2]:hover:border-sky-300"
          >
            <h2 className="font-bold text-center uppercase border-b text-[19px]">
              {movies.title}
            </h2>
          </a>

          <h3 className="font-bold text-center text-white text-base">
            {movies.credits?.crew &&
              movies.credits.crew.map((crew) => crew.name)}
          </h3>
        </header>
        <Rating value={movies.vote_average} />
        <Genres genres={movies.genres} />
        <p className="mt-2">{movies.overview?.substring(0, 197)}...</p>
        <Cast
          cast={movies?.credits?.cast}
          castURL={movies.urls?.castURL}
          castCount={movies.credits?.cast_count}
        />
      </section>
    </article>
  )
}
