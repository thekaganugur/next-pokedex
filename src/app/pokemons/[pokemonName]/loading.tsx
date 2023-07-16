import { Shell } from "@/components/shell"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <Shell>
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <div className="w-full md:w-1/2 lg:w-2/5">
          <AspectRatio ratio={4 / 3}>
            <Skeleton className="h-full w-full" />
          </AspectRatio>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <Skeleton className="h-8 w-56" />
            <Skeleton className="h-6 w-28" />
          </div>

          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-6 w-56" />

          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-32" />
          </div>
        </div>
      </div>
    </Shell>
  )
}
