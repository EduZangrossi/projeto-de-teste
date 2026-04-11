"use client"

import * as React from "react"
import { Toggle } from "@/components/ui/toggle"
import { Playground, ControlGroup, ControlSegmented, ControlToggle, ControlTextInput } from "@/components/playground"
import { RiBold } from "@remixicon/react"

export default function TogglePage() {
  const [pressed, setPressed] = React.useState(false)
  const [variant, setVariant] = React.useState<"default"|"outline">("default")
  const [size, setSize] = React.useState<"sm"|"default"|"lg">("default")
  const [disabled, setDisabled] = React.useState(false)
  const [label, setLabel] = React.useState("Bold")
  const [showIcon, setShowIcon] = React.useState(true)

  return (
    <Playground
      title="Toggle"
      description="A pressable button that switches between active and inactive states."
      controls={
        <>
          <ControlGroup label="Variant"><ControlSegmented options={[{label:"Default",value:"default"},{label:"Outline",value:"outline"}]} value={variant} onChange={setVariant} /></ControlGroup>
          <ControlGroup label="Size"><ControlSegmented options={[{label:"sm",value:"sm"},{label:"Default",value:"default"},{label:"lg",value:"lg"}]} value={size} onChange={setSize} /></ControlGroup>
          <ControlGroup label="Label"><ControlTextInput value={label} onChange={setLabel} /></ControlGroup>
          <ControlGroup label="Show icon"><ControlToggle value={showIcon} onChange={setShowIcon} label="Icon" /></ControlGroup>
          <ControlGroup label="Disabled"><ControlToggle value={disabled} onChange={setDisabled} label="Disabled" /></ControlGroup>
        </>
      }
    >
      <Toggle variant={variant} size={size} pressed={pressed} onPressedChange={setPressed} disabled={disabled}>
        {showIcon && <RiBold />}{label}
      </Toggle>
    </Playground>
  )
}
