import Link from "next/link"
import {
  components,
  categoryOrder,
  componentsByCategory,
  type ComponentMeta,
} from "@/lib/components-registry"

export default function HomePage() {
  return (
    <div className="min-h-svh bg-background">
      <div className="border-b border-border px-10 py-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="size-7 rounded-lg bg-primary" />
          <span className="font-heading text-2xl font-semibold">UI Kit</span>
        </div>
        <p className="text-muted-foreground text-sm max-w-md">
          Interactive playground for every component in this project. Click a card to explore props and states.
        </p>
        <p className="mt-2 text-xs text-muted-foreground/60">
          {components.length} components — Press <kbd className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px]">D</kbd> to toggle dark mode
        </p>
      </div>
      <div className="px-10 py-8 space-y-10">
        {categoryOrder
          .filter((cat) => componentsByCategory[cat])
          .map((cat) => (
            <section key={cat}>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{cat}</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {componentsByCategory[cat].map((c) => <ComponentCard key={c.slug} component={c} />)}
              </div>
            </section>
          ))}
      </div>
    </div>
  )
}

function ComponentCard({ component: c }: { component: ComponentMeta }) {
  return (
    <Link
      href={`/components/${c.slug}`}
      className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-primary/40 hover:shadow-sm hover:shadow-primary/5"
    >
      <div className="flex items-start justify-between">
        <span className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors">{c.name}</span>
        <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">{c.category}</span>
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">{c.description}</p>
    </Link>
  )
}
