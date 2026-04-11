"use client"

import * as React from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Playground, ControlGroup, ControlSegmented } from "@/components/playground"

const items = [
  { value: "item-1", trigger: "What is shadcn/ui?", content: "shadcn/ui is a collection of beautifully designed, accessible React components built on top of Radix UI primitives and styled with Tailwind CSS." },
  { value: "item-2", trigger: "Is it free to use?", content: "Yes, shadcn/ui is completely free and open source. You copy the component source into your own project and own it entirely." },
  { value: "item-3", trigger: "Does it work with Next.js?", content: "Absolutely. shadcn/ui works perfectly with Next.js App Router including React Server Components." },
]

export default function AccordionPage() {
  const [type, setType] = React.useState<"single"|"multiple">("single")

  return (
    <Playground
      title="Accordion"
      description="Vertically stacked sections that expand and collapse to reveal content."
      controls={
        <>
          <ControlGroup label="Type">
            <ControlSegmented options={[{label:"Single",value:"single"},{label:"Multiple",value:"multiple"}]} value={type} onChange={setType} />
          </ControlGroup>
        </>
      }
    >
      <Accordion type={type as "single"} collapsible={type === "single" ? true : undefined} className="w-96">
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Playground>
  )
}
