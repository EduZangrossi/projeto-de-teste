"use client"

import * as React from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Playground, ControlGroup, ControlSegmented } from "@/components/playground"

export default function TabsPage() {
  const [variant, setVariant] = React.useState<"default"|"line">("default")
  const [orientation, setOrientation] = React.useState<"horizontal"|"vertical">("horizontal")

  return (
    <Playground
      title="Tabs"
      description="Switch between related content panels using labeled tab triggers."
      controls={
        <>
          <ControlGroup label="Variant"><ControlSegmented options={[{label:"Default",value:"default"},{label:"Line",value:"line"}]} value={variant} onChange={setVariant} /></ControlGroup>
          <ControlGroup label="Orientation"><ControlSegmented options={[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}]} value={orientation} onChange={setOrientation} /></ControlGroup>
        </>
      }
    >
      <Tabs defaultValue="account" orientation={orientation} className="w-96">
        <TabsList variant={variant}>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="account"><div className="rounded-xl border border-border p-4 text-sm text-muted-foreground">Manage your account details, display name, and profile picture.</div></TabsContent>
        <TabsContent value="security"><div className="rounded-xl border border-border p-4 text-sm text-muted-foreground">Update your password and configure two-factor authentication.</div></TabsContent>
        <TabsContent value="billing"><div className="rounded-xl border border-border p-4 text-sm text-muted-foreground">View invoices, change your plan, and manage payment methods.</div></TabsContent>
      </Tabs>
    </Playground>
  )
}
