"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Playground, ControlGroup, ControlSegmented, ControlToggle, ControlTextInput } from "@/components/playground"

export default function InputPage() {
  const [type, setType] = React.useState<"text"|"email"|"password"|"number">("text")
  const [placeholder, setPlaceholder] = React.useState("Type something...")
  const [label, setLabel] = React.useState("Email address")
  const [disabled, setDisabled] = React.useState(false)
  const [invalid, setInvalid] = React.useState(false)
  const [showLabel, setShowLabel] = React.useState(true)

  return (
    <Playground
      title="Input"
      description="Single-line text entry field with label support and validation states."
      controls={
        <>
          <ControlGroup label="Type"><ControlSegmented options={[{label:"text",value:"text"},{label:"email",value:"email"},{label:"password",value:"password"},{label:"number",value:"number"}]} value={type} onChange={setType} /></ControlGroup>
          <ControlGroup label="Placeholder"><ControlTextInput value={placeholder} onChange={setPlaceholder} /></ControlGroup>
          <ControlGroup label="Label text"><ControlTextInput value={label} onChange={setLabel} /></ControlGroup>
          <ControlGroup label="Show label"><ControlToggle value={showLabel} onChange={setShowLabel} label="Label" /></ControlGroup>
          <ControlGroup label="Disabled"><ControlToggle value={disabled} onChange={setDisabled} label="Disabled" /></ControlGroup>
          <ControlGroup label="Invalid"><ControlToggle value={invalid} onChange={setInvalid} label="Invalid" /></ControlGroup>
        </>
      }
    >
      <div className="flex w-72 flex-col gap-2">
        {showLabel && <Label htmlFor="demo-input">{label}</Label>}
        <Input id="demo-input" type={type} placeholder={placeholder} disabled={disabled} aria-invalid={invalid || undefined} />
      </div>
    </Playground>
  )
}
