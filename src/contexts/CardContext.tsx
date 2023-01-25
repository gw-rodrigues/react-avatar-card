import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

export interface IGenre {
  id: number
  name: string
}

export interface ICast {
  id: number
  character: string
  name: string
  profile_path: string
}

export interface IDirector {
  id: number
  job: string
  name: string
  profile_path: string
  original_name: string
  popularity: number
}

export interface IMovie {
  id: number
  homepage: string
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  backdrop_path: string
  poster_path: string
  release_date: string
  runtime: number
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  genres: IGenre[]
  credits: {
    cast: ICast[]
    cast_count: number
    crew: IDirector[]
  }
  urls: {
    castURL: string
    posterURL: string
    bannerURL: string
  }
}

interface ICardContextTypes {
  movie: IMovie
  popularMovies: IMovie[]
  fetchMovieByID: (id: number) => Promise<void>
}

interface ICardContextProviderProps {
  children: ReactNode
}

export const CardContext = createContext({} as ICardContextTypes)

const MOVIE_ID = 76600
const URLS = {
  castURL: 'https://www.themoviedb.org/t/p/w276_and_h350_face',
  posterURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2',
  bannerURL: 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces',
}

export function CardContextProvider({ children }: ICardContextProviderProps) {
  const [movie, setMovie] = useState<IMovie>({ urls: URLS } as IMovie)
  const [popularMovies, setPopularMovies] = useState<IMovie[]>({} as IMovie[])

  const fetchMovieByID = useCallback(async (id: number) => {
    console.log(id)
    const movie = await api.get(`movie/${id}`, {
      params: {
        language: 'en-US',
        append_to_response: 'credits',
      },
    })

    const cast = movie.data?.credits?.cast.slice(0, 5)
    const cast_count = movie.data?.credits?.cast.length
    const crew = movie.data?.credits?.crew.filter(
      (crew: IDirector) => crew.job === 'Director',
    )

    setMovie({
      ...movie.data,
      credits: { cast, cast_count, crew },
      urls: URLS,
    })
  }, [])

  const fetchPopular = useCallback(async () => {
    const topMovies = await api.get(`movie/popular`, {
      params: {
        language: 'en-US',
      },
    })

    setPopularMovies(topMovies.data?.results.splice(0, 12))
  }, [])

  async function loadInitialData() {
    await Promise.all([fetchMovieByID(MOVIE_ID), fetchPopular()])
  }

  useEffect(() => {
    loadInitialData()
  }, [])

  return (
    <CardContext.Provider value={{ movie, popularMovies, fetchMovieByID }}>
      {children}
    </CardContext.Provider>
  )
}
