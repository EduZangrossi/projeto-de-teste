"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { Playground, ControlGroup, ControlSegmented, ControlToggle, ControlSlider } from "@/components/playground"

export default function SliderPage() {
  const [value, setValue] = React.useState([40])
  const [min, setMin] = React.useState(0)
  const [max, setMax] = React.useState(100)
  const [step, setStep] = React.useState(1)
  const [disabled, setDisabled] = React.useState(false)
  const [orientation, setOrientation] = React.useState<"horizontal" | "vertical">("horizontal")

  return (
    <Playground
      title="Slider"
      description="Select a numeric value along a range by dragging a thumb."
      controls={
        <>
          <ControlGroup label="Orientation"><ControlSegmented options={[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}]} value={orientation} onChange={setOrientation} /></ControlGroup>
          <ControlGroup label="Min"><ControlSlider value={min} onChange={setMin} min={0} max={50} /></ControlGroup>
          <ControlGroup label="Max"><ControlSlider value={max} onChange={setMax} min={50} max={200} /></ControlGroup>
          <ControlGroup label="Step"><ControlSlider value={step} onChange={setStep} min={1} max={20} /></ControlGroup>
          <ControlGroup label="Disabled"><ControlToggle value={disabled} onChange={setDisabled} label="Disabled" /></ControlGroup>
        </>
      }
    >
      <div className={orientation === "vertical" ? "flex h-48 items-center" : "w-72"}>
        <Slider value={value} onValueChange={setValue} min={min} max={max} step={step} disabled={disabled} orientation={orientation} />
      </div>
    </Playground>
  )
}
