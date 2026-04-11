"use client"

import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { Playground, ControlGroup, ControlSegmented } from "@/components/playground"

export default function SeparatorPage() {
  const [orientation, setOrientation] = React.useState<"horizontal"|"vertical">("horizontal")

  return (
    <Playground
      title="Separator"
      description="Thin visual divider for separating sections of content."
      controls={
        <>
          <ControlGroup label="Orientation">
            <ControlSegmented options={[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}]} value={orientation} onChange={setOrientation} />
          </ControlGroup>
        </>
      }
    >
      {orientation === "horizontal" ? (
        <div className="w-72 space-y-4">
          <p className="text-sm font-medium">Section A</p>
          <Separator orientation="horizontal" />
          <p className="text-sm font-medium">Section B</p>
          <Separator orientation="horizontal" />
          <p className="text-sm font-medium">Section C</p>
        </div>
      ) : (
        <div className="flex h-16 items-center gap-4">
          <span className="text-sm font-medium">Left</span>
          <Separator orientation="vertical" />
          <span className="text-sm font-medium">Center</span>
          <Separator orientation="vertical" />
          <span className="text-sm font-medium">Right</span>
        </div>
      )}
    </Playground>
  )
}
