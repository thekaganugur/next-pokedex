import { Skeleton } from "./ui/skeleton"

type Props = {
  statName: string
  value: number | null
}

export function PokemonStat({ statName, value }: Props) {
  if (value === null) return null

  return (
    <div className="flex items-center gap-6 ">
      <div className="w-32 shrink-0 font-medium">{statName}</div>
      <div className="w-20 shrink-0 text-sm font-medium leading-none">
        {value}
      </div>
      <div className="w-full">
        <div
          className="h-2.5 max-w-full rounded-xl bg-blue-100 "
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export function PokemonStatSkeleton() {
  return (
    <div className="flex w-full items-center gap-6 ">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-full" />
    </div>
  )
}
