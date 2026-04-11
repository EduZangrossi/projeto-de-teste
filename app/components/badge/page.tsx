"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Playground, ControlGroup, ControlSegmented, ControlTextInput } from "@/components/playground"

type Variant = "default" | "secondary" | "destructive" | "outline" | "ghost"

export default function BadgePage() {
  const [variant, setVariant] = React.useState<Variant>("default")
  const [label, setLabel] = React.useState("New feature")

  return (
    <Playground
      title="Badge"
      description="Small status label or tag for categorising and highlighting content."
      controls={
        <>
          <ControlGroup label="Variant">
            <ControlSegmented options={[{label:"Default",value:"default"},{label:"Secondary",value:"secondary"},{label:"Destructive",value:"destructive"},{label:"Outline",value:"outline"},{label:"Ghost",value:"ghost"}]} value={variant} onChange={setVariant} />
          </ControlGroup>
          <ControlGroup label="Label"><ControlTextInput value={label} onChange={setLabel} /></ControlGroup>
        </>
      }
    >
      <Badge variant={variant}>{label}</Badge>
    </Playground>
  )
}
