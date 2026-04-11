"use client"

import * as React from "react"
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Playground, ControlGroup, ControlToggle } from "@/components/playground"

const rows = [
  { id: "INV-001", name: "Pro Plan",    amount: "R$ 149,00", status: "Paid",    date: "Jan 2026" },
  { id: "INV-002", name: "Starter",     amount: "R$  49,00", status: "Pending", date: "Feb 2026" },
  { id: "INV-003", name: "Enterprise",  amount: "R$ 499,00", status: "Paid",    date: "Mar 2026" },
  { id: "INV-004", name: "Add-on Pack", amount: "R$  29,00", status: "Failed",  date: "Apr 2026" },
]

const statusVariant: Record<string, "default"|"secondary"|"destructive"|"outline"> = {
  Paid: "default", Pending: "outline", Failed: "destructive",
}

export default function TablePage() {
  const [showCaption, setShowCaption] = React.useState(false)
  const [showFooter, setShowFooter] = React.useState(true)

  return (
    <Playground
      title="Table"
      description="Structured grid for displaying rows of related data with headers."
      controls={
        <>
          <ControlGroup label="Show caption"><ControlToggle value={showCaption} onChange={setShowCaption} label="Caption" /></ControlGroup>
          <ControlGroup label="Show footer"><ControlToggle value={showFooter} onChange={setShowFooter} label="Footer" /></ControlGroup>
        </>
      }
    >
      <div className="w-full max-w-2xl rounded-xl border border-border overflow-hidden">
        <Table>
          {showCaption && <TableCaption>A list of recent invoices.</TableCaption>}
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead><TableHead>Plan</TableHead><TableHead>Date</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-mono text-xs text-muted-foreground">{row.id}</TableCell>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell className="text-muted-foreground">{row.date}</TableCell>
                <TableCell><Badge variant={statusVariant[row.status]}>{row.status}</Badge></TableCell>
                <TableCell className="text-right font-mono">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          {showFooter && (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell className="text-right font-mono">R$ 726,00</TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </div>
    </Playground>
  )
}
