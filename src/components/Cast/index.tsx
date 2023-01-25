import { ICast } from '../../contexts/CardContext'

interface ICastsProps {
  cast: ICast[]
  castURL: string
  castCount: number
}
export function Cast({ cast, castCount, castURL }: ICastsProps) {
  return (
    <ul className="flex items-center gap-1 relative mt-2">
      {cast &&
        cast.map((person) => (
          <li
            key={person.id}
            className="rounded-full overflow-hidden w-10 h-10 border-2"
          >
            <img
              src={`${castURL}/${person.profile_path}`}
              alt={person.name}
              placeholder={person.name}
              className="max-w-full"
            />
          </li>
        ))}
      {castCount && (
        <li className="ml-1 rounded-full overflow-hidden w-8 h-8 border-2 text-xs flex items-center pl-[3px] bg-sky-600 font-bold">
          +{String(castCount - 5)}
        </li>
      )}
    </ul>
  )
}
