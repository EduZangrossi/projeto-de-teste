"use client"

import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Playground, ControlGroup, ControlToggle, ControlTextInput } from "@/components/playground"

export default function TextareaPage() {
  const [placeholder, setPlaceholder] = React.useState("Write your message...")
  const [label, setLabel] = React.useState("Message")
  const [disabled, setDisabled] = React.useState(false)
  const [invalid, setInvalid] = React.useState(false)
  const [showLabel, setShowLabel] = React.useState(true)

  return (
    <Playground
      title="Textarea"
      description="Multi-line text entry field that grows with content."
      controls={
        <>
          <ControlGroup label="Placeholder"><ControlTextInput value={placeholder} onChange={setPlaceholder} /></ControlGroup>
          <ControlGroup label="Label text"><ControlTextInput value={label} onChange={setLabel} /></ControlGroup>
          <ControlGroup label="Show label"><ControlToggle value={showLabel} onChange={setShowLabel} label="Label" /></ControlGroup>
          <ControlGroup label="Disabled"><ControlToggle value={disabled} onChange={setDisabled} label="Disabled" /></ControlGroup>
          <ControlGroup label="Invalid"><ControlToggle value={invalid} onChange={setInvalid} label="Invalid" /></ControlGroup>
        </>
      }
    >
      <div className="flex w-80 flex-col gap-2">
        {showLabel && <Label>{label}</Label>}
        <Textarea placeholder={placeholder} disabled={disabled} aria-invalid={invalid || undefined} />
      </div>
    </Playground>
  )
}
