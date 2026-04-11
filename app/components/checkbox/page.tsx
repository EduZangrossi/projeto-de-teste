"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Playground, ControlGroup, ControlToggle, ControlTextInput } from "@/components/playground"

export default function CheckboxPage() {
  const [checked, setChecked] = React.useState<boolean | "indeterminate">(false)
  const [disabled, setDisabled] = React.useState(false)
  const [label, setLabel] = React.useState("Accept terms and conditions")

  return (
    <Playground
      title="Checkbox"
      description="Boolean toggle for selecting or deselecting an option."
      controls={
        <>
          <ControlGroup label="Checked"><ControlToggle value={checked === true} onChange={(v) => setChecked(v)} label="Checked" /></ControlGroup>
          <ControlGroup label="Indeterminate"><ControlToggle value={checked === "indeterminate"} onChange={(v) => setChecked(v ? "indeterminate" : false)} label="Indeterminate" /></ControlGroup>
          <ControlGroup label="Disabled"><ControlToggle value={disabled} onChange={setDisabled} label="Disabled" /></ControlGroup>
          <ControlGroup label="Label text"><ControlTextInput value={label} onChange={setLabel} /></ControlGroup>
        </>
      }
    >
      <div className="flex items-center gap-2">
        <Checkbox id="demo-checkbox" checked={checked} onCheckedChange={(v) => setChecked(v as boolean | "indeterminate")} disabled={disabled} />
        <Label htmlFor="demo-checkbox">{label}</Label>
      </div>
    </Playground>
  )
}
