import { IGenre } from '../../contexts/CardContext'

interface IGenresProps {
  genres: IGenre[]
}

export function Genres({ genres }: IGenresProps) {
  const colorList = [
    'bg-blue-500',
    'bg-orange-500',
    'bg-green-500',
    'bg-red-500',
    'bg-indigo-500',
    'bg-cyan-500',
    'bg-sky-500',
    'bg-purple-500',
  ]

  return (
    <div className="flex flex-wrap gap-2 relative">
      {genres &&
        genres.map((genre, index) => (
          <div
            key={genre.id}
            className={`px-2 py-1 ${colorList[index]} rounded  text-sm`}
          >
            {genre.name}
          </div>
        ))}
    </div>
  )
}
