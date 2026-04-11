"use client"

import * as React from "react"
import { Alert, AlertTitle, AlertDescription, AlertAction } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Playground, ControlGroup, ControlSegmented, ControlToggle, ControlTextInput } from "@/components/playground"
import { RiInformationLine, RiAlertLine } from "@remixicon/react"

export default function AlertPage() {
  const [variant, setVariant] = React.useState<"default"|"destructive">("default")
  const [title, setTitle] = React.useState("Heads up!")
  const [description, setDescription] = React.useState("You can use components to build complex UIs from simple parts.")
  const [showIcon, setShowIcon] = React.useState(true)
  const [showAction, setShowAction] = React.useState(false)

  return (
    <Playground
      title="Alert"
      description="Contextual message that communicates status, warnings, or information."
      controls={
        <>
          <ControlGroup label="Variant"><ControlSegmented options={[{label:"Default",value:"default"},{label:"Destructive",value:"destructive"}]} value={variant} onChange={setVariant} /></ControlGroup>
          <ControlGroup label="Title"><ControlTextInput value={title} onChange={setTitle} /></ControlGroup>
          <ControlGroup label="Description"><ControlTextInput value={description} onChange={setDescription} /></ControlGroup>
          <ControlGroup label="Show icon"><ControlToggle value={showIcon} onChange={setShowIcon} label="Icon" /></ControlGroup>
          <ControlGroup label="Show action"><ControlToggle value={showAction} onChange={setShowAction} label="Action" /></ControlGroup>
        </>
      }
    >
      <Alert variant={variant} className="w-96">
        {showIcon && (variant === "destructive" ? <RiAlertLine /> : <RiInformationLine />)}
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
        {showAction && (
          <AlertAction>
            <Button size="sm" variant={variant === "destructive" ? "destructive" : "outline"}>Dismiss</Button>
          </AlertAction>
        )}
      </Alert>
    </Playground>
  )
}
