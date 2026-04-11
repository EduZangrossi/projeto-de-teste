"use client"

import * as React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Playground, ControlGroup, ControlToggle, ControlTextInput } from "@/components/playground"

export default function RadioGroupPage() {
  const [value, setValue] = React.useState("option-1")
  const [disabled, setDisabled] = React.useState(false)
  const [opt1, setOpt1] = React.useState("Option A")
  const [opt2, setOpt2] = React.useState("Option B")
  const [opt3, setOpt3] = React.useState("Option C")

  return (
    <Playground
      title="Radio Group"
      description="Select exactly one option from a set of mutually exclusive choices."
      controls={
        <>
          <ControlGroup label="Disabled"><ControlToggle value={disabled} onChange={setDisabled} label="Disabled" /></ControlGroup>
          <ControlGroup label="Option 1 label"><ControlTextInput value={opt1} onChange={setOpt1} /></ControlGroup>
          <ControlGroup label="Option 2 label"><ControlTextInput value={opt2} onChange={setOpt2} /></ControlGroup>
          <ControlGroup label="Option 3 label"><ControlTextInput value={opt3} onChange={setOpt3} /></ControlGroup>
        </>
      }
    >
      <RadioGroup value={value} onValueChange={setValue} disabled={disabled} className="w-56">
        {[opt1, opt2, opt3].map((opt, i) => (
          <div key={i} className="flex items-center gap-2">
            <RadioGroupItem value={`option-${i + 1}`} id={`opt-${i}`} />
            <Label htmlFor={`opt-${i}`}>{opt}</Label>
          </div>
        ))}
      </RadioGroup>
    </Playground>
  )
}
