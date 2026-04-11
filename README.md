# UI Kit — Component Playground

Interactive playground for every shadcn/ui component in this project. Built with **Next.js 16**, **Tailwind CSS v4**, and **Radix UI**.

## Stack

- Next.js 16 (App Router, Turbopack)
- Tailwind CSS v4
- Radix UI (via `radix-ui` meta-package)
- shadcn/ui (`radix-maia` style)
- Remix Icon (`@remixicon/react`)
- TypeScript 5

## Getting started

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Pressione **`D`** para alternar entre modo claro e escuro.

## Estrutura

```
app/
  page.tsx                        # Home — grid de cards por categoria
  components/
    layout.tsx                    # Layout com sidebar de navegação
    [slug]/page.tsx               # Página de playground por componente
components/
  app-sidebar.tsx                 # Sidebar com grupos e highlight ativo
  playground.tsx                  # Layout preview + painel de controles
  ui/                             # Componentes shadcn/ui
lib/
  components-registry.ts          # Registro central de componentes
  utils.ts                        # cn() helper
```

## Componentes disponíveis (20)

| Categoria  | Componentes |
|------------|-------------|
| Inputs     | Button, Input, Textarea, Checkbox, Radio Group, Switch, Slider, Select, Toggle |
| Display    | Badge, Avatar, Card, Skeleton, Separator, Progress, Table, Tabs, Accordion |
| Feedback   | Alert, Tooltip |

Cada página de playground oferece controles ao vivo para variantes, tamanhos, estados e labels.
