"use client"

import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Playground, ControlGroup, ControlSegmented, ControlToggle, ControlTextInput } from "@/components/playground"

export default function CardPage() {
  const [size, setSize] = React.useState<"default"|"sm">("default")
  const [title, setTitle] = React.useState("Card title")
  const [description, setDescription] = React.useState("A short description of this card's purpose.")
  const [showDescription, setShowDescription] = React.useState(true)
  const [showFooter, setShowFooter] = React.useState(true)
  const [showAction, setShowAction] = React.useState(false)

  return (
    <Playground
      title="Card"
      description="Contained surface for grouping related content and actions."
      controls={
        <>
          <ControlGroup label="Size"><ControlSegmented options={[{label:"Default",value:"default"},{label:"sm",value:"sm"}]} value={size} onChange={setSize} /></ControlGroup>
          <ControlGroup label="Title"><ControlTextInput value={title} onChange={setTitle} /></ControlGroup>
          <ControlGroup label="Description"><ControlTextInput value={description} onChange={setDescription} /></ControlGroup>
          <ControlGroup label="Show description"><ControlToggle value={showDescription} onChange={setShowDescription} label="Description" /></ControlGroup>
          <ControlGroup label="Show footer"><ControlToggle value={showFooter} onChange={setShowFooter} label="Footer" /></ControlGroup>
          <ControlGroup label="Show action"><ControlToggle value={showAction} onChange={setShowAction} label="Action" /></ControlGroup>
        </>
      }
    >
      <Card size={size} className="w-80">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {showDescription && <CardDescription>{description}</CardDescription>}
          {showAction && <CardAction><Button variant="ghost" size="sm">Edit</Button></CardAction>}
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">This is the main content area of the card. You can place any content here.</p>
        </CardContent>
        {showFooter && (
          <CardFooter className="border-t gap-2">
            <Button size="sm">Confirm</Button>
            <Button size="sm" variant="ghost">Cancel</Button>
          </CardFooter>
        )}
      </Card>
    </Playground>
  )
}
