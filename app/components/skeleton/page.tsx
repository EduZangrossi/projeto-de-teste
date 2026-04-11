"use client"

import * as React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Playground, ControlGroup, ControlSegmented } from "@/components/playground"

type Layout = "card" | "list" | "avatar"

export default function SkeletonPage() {
  const [layout, setLayout] = React.useState<Layout>("card")

  return (
    <Playground
      title="Skeleton"
      description="Animated loading placeholder that mimics the shape of incoming content."
      controls={
        <>
          <ControlGroup label="Layout preset">
            <ControlSegmented options={[{label:"Card",value:"card"},{label:"List",value:"list"},{label:"Avatar",value:"avatar"}]} value={layout} onChange={setLayout} />
          </ControlGroup>
        </>
      }
    >
      {layout === "card" && (
        <div className="w-72 space-y-4 rounded-2xl border border-border p-5">
          <Skeleton className="h-40 w-full rounded-xl" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
          <div className="flex gap-2 pt-1">
            <Skeleton className="h-8 w-20 rounded-full" />
            <Skeleton className="h-8 w-20 rounded-full" />
          </div>
        </div>
      )}
      {layout === "list" && (
        <div className="w-72 space-y-3">
          {[1,2,3,4].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="size-10 shrink-0 rounded-full" />
              <div className="flex-1 space-y-1.5">
                <Skeleton className="h-3 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      )}
      {layout === "avatar" && (
        <div className="flex items-center gap-4">
          <Skeleton className="size-16 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      )}
    </Playground>
  )
}
