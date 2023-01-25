import { PopularMovies } from '../PopularMovies'

export function Header() {
  return (
    <header className="flex flex-col gap-4 items-center relative">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl uppercase text-center font-bold drop-shadow-lg text-sky-300/90 border-b border-sky-500 ">
          Movie Card
        </h1>
        <a className="flex" href="https://www.themoviedb.org/" target="_blank">
          <span className="font-bold text-md text-green-300/80">API - </span>
          <img
            className="w-24"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="TMDB"
          />
        </a>
      </div>

      <PopularMovies />
    </header>
  )
}
