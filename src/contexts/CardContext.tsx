import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface IGenre {
  id: number
  name: string
}

interface ICast {
  id: number
  character: string
  name: string
  profile_path: string
}

interface IMovie {
  id: number
  homepage: string
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
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
  casts: ICast[]
}

interface ICardContextTypes {
  movie: IMovie
}

interface ICardContextProviderProps {
  children: ReactNode
}

export const CardContext = createContext({} as ICardContextTypes)

const MOVIE_ID = 76600

export function CardContextProvider({ children }: ICardContextProviderProps) {
  const [movies, setMovies] = useState<ICardContextTypes>(
    {} as ICardContextTypes,
  )

  const fetchMovieByID = useCallback(async (id: number) => {
    const movie = await api.get(`movie/${MOVIE_ID}`, {
      params: { language: 'en-US' },
    })
    setMovies((prev) => ({ ...prev, ...movie.data }))
  }, [])

  const fetchCreditsByMovieId = useCallback(async (id: number) => {
    const credits = await api.get(`movie/${MOVIE_ID}/credits`, {
      params: { language: 'en-US' },
    })
    setMovies((prev) => ({ ...prev, casts: credits.data?.cast }))
  }, [])

  async function loadInitialData() {
    await Promise.all([
      fetchMovieByID(MOVIE_ID),
      fetchCreditsByMovieId(MOVIE_ID),
    ])
  }

  useEffect(() => {
    loadInitialData()
  }, [])

  return <CardContext.Provider value={movies}>{children}</CardContext.Provider>
}
