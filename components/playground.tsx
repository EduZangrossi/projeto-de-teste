"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

interface PlaygroundProps {
  title: string
  description: string
  children: React.ReactNode
  controls: React.ReactNode
}

export function Playground({ title, description, children, controls }: PlaygroundProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex shrink-0 flex-col gap-0.5 border-b border-border px-8 py-5">
        <h1 className="font-heading text-xl font-semibold">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 items-center justify-center overflow-auto bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[size:20px_20px] p-12">
          {children}
        </div>
        <Separator orientation="vertical" />
        <aside className="flex w-64 shrink-0 flex-col gap-5 overflow-y-auto px-5 py-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Controls</p>
          {controls}
        </aside>
      </div>
    </div>
  )
}

export function ControlGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      {children}
    </div>
  )
}

export function ControlSegmented<T extends string>({
  options, value, onChange,
}: { options: { label: string; value: T }[]; value: T; onChange: (v: T) => void }) {
  return (
    <div className="flex flex-wrap gap-1">
      {options.map((opt) => (
        <button key={opt.value} onClick={() => onChange(opt.value)}
          className={cn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
            value === opt.value ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
          )}
        >{opt.label}</button>
      ))}
    </div>
  )
}

export function ControlToggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button onClick={() => onChange(!value)}
      className={cn("flex h-7 w-full items-center justify-center rounded-md text-xs font-medium transition-colors",
        value ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
      )}
    >{value ? "On" : "Off"}</button>
  )
}

export function ControlTextInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
      className="h-7 w-full rounded-md border border-input bg-input/30 px-2 text-xs outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
    />
  )
}

export function ControlSlider({ value, onChange, min = 0, max = 100 }: { value: number; onChange: (v: number) => void; min?: number; max?: number }) {
  return (
    <div className="flex items-center gap-2">
      <input type="range" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} className="flex-1 accent-primary" />
      <span className="w-7 text-right text-xs tabular-nums text-muted-foreground">{value}</span>
    </div>
  )
}
