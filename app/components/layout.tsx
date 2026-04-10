import { AppSidebar, type NavGroup } from "@/components/app-sidebar"
import { components, categoryOrder, componentsByCategory } from "@/lib/components-registry"
import Link from "next/link"

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  const groups: NavGroup[] = [
    { items: [{ label: "← All components", href: "/" }] },
    ...categoryOrder
      .filter((cat) => componentsByCategory[cat])
      .map((cat) => ({
        title: cat,
        items: componentsByCategory[cat].map((c) => ({ label: c.name, href: `/components/${c.slug}` })),
      })),
  ]

  return (
    <div className="flex h-svh overflow-hidden bg-background">
      <AppSidebar
        groups={groups}
        header={
          <Link href="/" className="flex items-center gap-2">
            <span className="size-5 rounded-md bg-primary" />
            <span className="text-sm font-semibold">UI Kit</span>
          </Link>
        }
      />
      <div className="flex flex-1 flex-col overflow-hidden">{children}</div>
    </div>
  )
}
