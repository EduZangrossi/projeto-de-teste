"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { Playground, ControlGroup, ControlSlider } from "@/components/playground"

export default function ProgressPage() {
  const [value, setValue] = React.useState(60)

  return (
    <Playground
      title="Progress"
      description="Visual indicator that tracks the completion of a task or process."
      controls={
        <>
          <ControlGroup label="Value (%)"><ControlSlider value={value} onChange={setValue} min={0} max={100} /></ControlGroup>
        </>
      }
    >
      <div className="w-72 space-y-3">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Uploading file…</span>
          <span>{value}%</span>
        </div>
        <Progress value={value} />
      </div>
    </Playground>
  )
}
