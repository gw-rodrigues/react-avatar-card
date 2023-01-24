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
  urls: {
    castURL: string
    posterURL: string
    bannerURL: string
  }
}

interface ICardContextTypes {
  movie: IMovie
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

  const fetchMovieByID = useCallback(async (id: number) => {
    const movie = await api.get(`movie/${MOVIE_ID}`, {
      params: { language: 'en-US' },
    })
    setMovie((prev) => ({ ...prev, ...movie.data }))
  }, [])

  const fetchCreditsByMovieId = useCallback(async (id: number) => {
    const credits = await api.get(`movie/${MOVIE_ID}/credits`, {
      params: { language: 'en-US' },
    })
    setMovie((prev) => ({ ...prev, casts: credits.data?.cast }))
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

  return (
    <CardContext.Provider value={{ movie }}>{children}</CardContext.Provider>
  )
}
