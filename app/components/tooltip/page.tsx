"use client"

import * as React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Playground, ControlGroup, ControlSegmented, ControlTextInput } from "@/components/playground"

export default function TooltipPage() {
  const [side, setSide] = React.useState<"top"|"right"|"bottom"|"left">("top")
  const [content, setContent] = React.useState("This is a helpful tooltip")
  const [triggerLabel, setTriggerLabel] = React.useState("Hover me")

  return (
    <Playground
      title="Tooltip"
      description="Floating label that appears on hover to provide additional context."
      controls={
        <>
          <ControlGroup label="Side"><ControlSegmented options={[{label:"Top",value:"top"},{label:"Right",value:"right"},{label:"Bottom",value:"bottom"},{label:"Left",value:"left"}]} value={side} onChange={setSide} /></ControlGroup>
          <ControlGroup label="Tooltip text"><ControlTextInput value={content} onChange={setContent} /></ControlGroup>
          <ControlGroup label="Trigger label"><ControlTextInput value={triggerLabel} onChange={setTriggerLabel} /></ControlGroup>
        </>
      }
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">{triggerLabel}</Button>
          </TooltipTrigger>
          <TooltipContent side={side}>{content}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Playground>
  )
}
