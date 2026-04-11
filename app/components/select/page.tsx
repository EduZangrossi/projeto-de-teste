"use client"

import * as React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Playground, ControlGroup, ControlSegmented, ControlToggle, ControlTextInput } from "@/components/playground"

export default function SelectPage() {
  const [size, setSize] = React.useState<"default" | "sm">("default")
  const [disabled, setDisabled] = React.useState(false)
  const [placeholder, setPlaceholder] = React.useState("Select a fruit…")
  const [label, setLabel] = React.useState("Favourite fruit")
  const [showLabel, setShowLabel] = React.useState(true)

  return (
    <Playground
      title="Select"
      description="Choose a single value from a dropdown list of options."
      controls={
        <>
          <ControlGroup label="Size"><ControlSegmented options={[{label:"Default",value:"default"},{label:"sm",value:"sm"}]} value={size} onChange={setSize} /></ControlGroup>
          <ControlGroup label="Placeholder"><ControlTextInput value={placeholder} onChange={setPlaceholder} /></ControlGroup>
          <ControlGroup label="Label text"><ControlTextInput value={label} onChange={setLabel} /></ControlGroup>
          <ControlGroup label="Show label"><ControlToggle value={showLabel} onChange={setShowLabel} label="Label" /></ControlGroup>
          <ControlGroup label="Disabled"><ControlToggle value={disabled} onChange={setDisabled} label="Disabled" /></ControlGroup>
        </>
      }
    >
      <div className="flex w-64 flex-col gap-2">
        {showLabel && <Label>{label}</Label>}
        <Select disabled={disabled}>
          <SelectTrigger size={size} className="w-full"><SelectValue placeholder={placeholder} /></SelectTrigger>
          <SelectContent>
            {["Apple","Banana","Blueberry","Grapes","Pineapple"].map((f) => (
              <SelectItem key={f} value={f.toLowerCase()}>{f}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </Playground>
  )
}
