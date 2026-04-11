"use client"

import * as React from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Playground, ControlGroup, ControlSegmented, ControlToggle, ControlTextInput } from "@/components/playground"

export default function SwitchPage() {
  const [checked, setChecked] = React.useState(false)
  const [size, setSize] = React.useState<"default" | "sm">("default")
  const [disabled, setDisabled] = React.useState(false)
  const [label, setLabel] = React.useState("Enable notifications")

  return (
    <Playground
      title="Switch"
      description="Toggle between two states — on and off."
      controls={
        <>
          <ControlGroup label="Checked"><ControlToggle value={checked} onChange={setChecked} label="Checked" /></ControlGroup>
          <ControlGroup label="Size"><ControlSegmented options={[{label:"Default",value:"default"},{label:"sm",value:"sm"}]} value={size} onChange={setSize} /></ControlGroup>
          <ControlGroup label="Disabled"><ControlToggle value={disabled} onChange={setDisabled} label="Disabled" /></ControlGroup>
          <ControlGroup label="Label text"><ControlTextInput value={label} onChange={setLabel} /></ControlGroup>
        </>
      }
    >
      <div className="flex items-center gap-3">
        <Switch id="demo-switch" checked={checked} onCheckedChange={setChecked} size={size} disabled={disabled} />
        <Label htmlFor="demo-switch">{label}</Label>
      </div>
    </Playground>
  )
}
