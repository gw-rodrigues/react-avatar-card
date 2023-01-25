import { useContextSelector } from 'use-context-selector'
import { CardContext } from '../../contexts/CardContext'

export function PopularMovies() {
  const popularMovies = useContextSelector(
    CardContext,
    (context) => context.popularMovies,
  )

  const posterURL = useContextSelector(
    CardContext,
    (context) => context.movie.urls.posterURL,
  )

  const handleFetchMovieByID = useContextSelector(
    CardContext,
    (context) => context.fetchMovieByID,
  )

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-gray-300 drop-shadow uppercase text-xs">
        select a movie
      </h2>
      <ul className="flex flex-wrap items-center gap-1 relative mt-2 max-w-xs">
        {popularMovies.length > 0 &&
          popularMovies.map((movie) => (
            <li
              key={movie.id}
              className="rounded-full overflow-hidden w-12 h-12 border-2 opacity-40 hover:opacity-100 transition-all"
            >
              <button
                type="button"
                title={movie.title}
                onClick={() => {
                  handleFetchMovieByID(movie.id)
                }}
              >
                <img
                  src={`${posterURL}/${movie.poster_path}`}
                  alt={movie.title}
                  className="max-w-full"
                />
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}
