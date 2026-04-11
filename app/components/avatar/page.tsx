"use client"

import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"
import { Playground, ControlGroup, ControlSegmented, ControlToggle, ControlTextInput } from "@/components/playground"

type Size = "sm" | "default" | "lg"
type Mode = "single" | "group"

export default function AvatarPage() {
  const [size, setSize] = React.useState<Size>("default")
  const [mode, setMode] = React.useState<Mode>("single")
  const [showBadge, setShowBadge] = React.useState(false)
  const [fallback, setFallback] = React.useState("JD")
  const [useImage, setUseImage] = React.useState(true)
  const seeds = ["Felix", "Zoe", "Max", "Anna"]

  return (
    <Playground
      title="Avatar"
      description="User profile picture with image, fallback initials, badge, and group variants."
      controls={
        <>
          <ControlGroup label="Mode"><ControlSegmented options={[{label:"Single",value:"single"},{label:"Group",value:"group"}]} value={mode} onChange={setMode} /></ControlGroup>
          <ControlGroup label="Size"><ControlSegmented options={[{label:"sm",value:"sm"},{label:"Default",value:"default"},{label:"lg",value:"lg"}]} value={size} onChange={setSize} /></ControlGroup>
          <ControlGroup label="Show image"><ControlToggle value={useImage} onChange={setUseImage} label="Image" /></ControlGroup>
          <ControlGroup label="Show badge"><ControlToggle value={showBadge} onChange={setShowBadge} label="Badge" /></ControlGroup>
          <ControlGroup label="Fallback text"><ControlTextInput value={fallback} onChange={setFallback} placeholder="JD" /></ControlGroup>
        </>
      }
    >
      {mode === "single" ? (
        <Avatar size={size}>
          {useImage && <AvatarImage src="https://api.dicebear.com/9.x/notionists/svg?seed=JohnDoe" alt="John Doe" />}
          <AvatarFallback>{fallback}</AvatarFallback>
          {showBadge && <AvatarBadge />}
        </Avatar>
      ) : (
        <AvatarGroup>
          {seeds.map((seed) => (
            <Avatar key={seed} size={size}>
              {useImage && <AvatarImage src={`https://api.dicebear.com/9.x/notionists/svg?seed=${seed}`} alt={seed} />}
              <AvatarFallback>{seed.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          ))}
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
      )}
    </Playground>
  )
}
