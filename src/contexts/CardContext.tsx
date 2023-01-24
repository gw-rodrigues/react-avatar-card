import { ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'

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
  movies: IMovie[]
}

interface ICardContextProviderProps {
  children: ReactNode
}

export const CardContext = createContext({} as ICardContextTypes)

export function CardContextProvider({ children }: ICardContextProviderProps) {
  const [movies, setMovies] = useState<IMovie[]>({} as IMovie[])
  return (
    <CardContext.Provider value={{ movies }}>{children}</CardContext.Provider>
  )
}
