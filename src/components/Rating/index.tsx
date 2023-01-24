import { Star } from 'phosphor-react'

interface IRantingProps {
  value: number
}
export function Rating({ value }: IRantingProps) {
  const simpleRatingFiveStar = Math.ceil(value / 2)
  return (
    <div className="flex items-center gap-1 text-yellow-300">
      <Star
        size={20}
        className="fill-yellow-300"
        weight={simpleRatingFiveStar > 0 ? 'fill' : 'regular'}
      />
      <Star
        size={20}
        className="fill-yellow-300"
        weight={simpleRatingFiveStar > 1 ? 'fill' : 'regular'}
      />
      <Star
        size={20}
        className="fill-yellow-300"
        weight={simpleRatingFiveStar > 2 ? 'fill' : 'regular'}
      />
      <Star
        size={20}
        className="fill-yellow-300"
        weight={simpleRatingFiveStar > 3 ? 'fill' : 'regular'}
      />
      <Star
        size={20}
        className="fill-yellow-300"
        weight={simpleRatingFiveStar > 4 ? 'fill' : 'regular'}
      />

      <span className="text-white text-lg font-bold tracking-[-.1rem]">
        {Math.ceil(value / 2)} / 5
      </span>
    </div>
  )
}
