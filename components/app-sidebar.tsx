"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
}

export interface NavGroup {
  title?: string
  items: NavItem[]
}

interface AppSidebarProps {
  groups: NavGroup[]
  header?: React.ReactNode
  className?: string
}

export function AppSidebar({ groups, header, className }: AppSidebarProps) {
  const pathname = usePathname()

  return (
    <aside className={cn("flex h-full w-56 shrink-0 flex-col border-r border-border bg-sidebar", className)}>
      {header && (
        <div className="flex h-12 items-center border-b border-border px-4">{header}</div>
      )}
      <nav className="flex flex-1 flex-col gap-4 overflow-y-auto px-2 py-3">
        {groups.map((group, gi) => (
          <div key={gi} className="flex flex-col gap-0.5">
            {group.title && (
              <p className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                {group.title}
              </p>
            )}
            {group.items.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  )}
                >
                  {item.icon && <span className="size-4 shrink-0 [&>svg]:size-4">{item.icon}</span>}
                  {item.label}
                </Link>
              )
            })}
          </div>
        ))}
      </nav>
    </aside>
  )
}
