"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Playground, ControlGroup, ControlSegmented, ControlToggle, ControlTextInput } from "@/components/playground"
import { RiStarLine } from "@remixicon/react"

type Variant = "default" | "outline" | "secondary" | "ghost" | "destructive" | "link"
type Size = "xs" | "sm" | "default" | "lg" | "icon"

export default function ButtonPage() {
  const [variant, setVariant] = React.useState<Variant>("default")
  const [size, setSize] = React.useState<Size>("default")
  const [label, setLabel] = React.useState("Click me")
  const [disabled, setDisabled] = React.useState(false)
  const [withIcon, setWithIcon] = React.useState(false)

  return (
    <Playground
      title="Button"
      description="Trigger actions and events with multiple variants and sizes."
      controls={
        <>
          <ControlGroup label="Variant">
            <ControlSegmented options={[{label:"Default",value:"default"},{label:"Outline",value:"outline"},{label:"Secondary",value:"secondary"},{label:"Ghost",value:"ghost"},{label:"Destructive",value:"destructive"},{label:"Link",value:"link"}]} value={variant} onChange={setVariant} />
          </ControlGroup>
          <ControlGroup label="Size">
            <ControlSegmented options={[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"Default",value:"default"},{label:"lg",value:"lg"},{label:"icon",value:"icon"}]} value={size} onChange={setSize} />
          </ControlGroup>
          <ControlGroup label="Label"><ControlTextInput value={label} onChange={setLabel} placeholder="Button label" /></ControlGroup>
          <ControlGroup label="Disabled"><ControlToggle value={disabled} onChange={setDisabled} label="Disabled" /></ControlGroup>
          <ControlGroup label="With icon"><ControlToggle value={withIcon} onChange={setWithIcon} label="Icon" /></ControlGroup>
        </>
      }
    >
      <Button variant={variant} size={size} disabled={disabled}>
        {withIcon && <RiStarLine />}
        {size !== "icon" ? label : <RiStarLine />}
      </Button>
    </Playground>
  )
}
