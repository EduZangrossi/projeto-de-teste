export interface ComponentMeta {
  slug: string
  name: string
  description: string
  category: "Inputs" | "Display" | "Feedback" | "Layout" | "Navigation"
}

export const components: ComponentMeta[] = [
  { slug: "button",      name: "Button",       description: "Trigger actions and events.",             category: "Inputs" },
  { slug: "input",       name: "Input",        description: "Single-line text entry field.",           category: "Inputs" },
  { slug: "textarea",    name: "Textarea",     description: "Multi-line text entry field.",            category: "Inputs" },
  { slug: "checkbox",    name: "Checkbox",     description: "Boolean toggle using a box.",             category: "Inputs" },
  { slug: "radio-group", name: "Radio Group",  description: "Select one option from a set.",          category: "Inputs" },
  { slug: "switch",      name: "Switch",       description: "Toggle between two states.",              category: "Inputs" },
  { slug: "slider",      name: "Slider",       description: "Select a value along a range.",           category: "Inputs" },
  { slug: "select",      name: "Select",       description: "Choose from a dropdown list.",            category: "Inputs" },
  { slug: "toggle",      name: "Toggle",       description: "Pressable on/off button.",                category: "Inputs" },
  { slug: "badge",       name: "Badge",        description: "Small status or label indicator.",        category: "Display" },
  { slug: "avatar",      name: "Avatar",       description: "User profile image with fallback.",       category: "Display" },
  { slug: "card",        name: "Card",         description: "Contained surface for grouped content.",  category: "Display" },
  { slug: "skeleton",    name: "Skeleton",     description: "Animated loading placeholder.",           category: "Display" },
  { slug: "separator",   name: "Separator",    description: "Visual divider between content.",         category: "Display" },
  { slug: "progress",    name: "Progress",     description: "Track completion of a task.",             category: "Display" },
  { slug: "table",       name: "Table",        description: "Tabular data display.",                   category: "Display" },
  { slug: "tabs",        name: "Tabs",         description: "Switch between related content panels.",  category: "Display" },
  { slug: "accordion",   name: "Accordion",    description: "Expand/collapse content sections.",       category: "Display" },
  { slug: "alert",       name: "Alert",        description: "Contextual message or warning.",          category: "Feedback" },
  { slug: "tooltip",     name: "Tooltip",      description: "Contextual hint on hover.",               category: "Feedback" },
]

export const componentsByCategory = components.reduce<Record<string, ComponentMeta[]>>((acc, c) => {
  acc[c.category] = acc[c.category] ? [...acc[c.category], c] : [c]
  return acc
}, {})

export const categoryOrder: ComponentMeta["category"][] = ["Inputs", "Display", "Feedback", "Layout", "Navigation"]
