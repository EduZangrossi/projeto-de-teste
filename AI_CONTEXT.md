# AI_CONTEXT.md — Projeto de teste (UI Kit Playground)

Leia este arquivo antes de qualquer tarefa. Ele contém tudo que você precisa saber sobre o projeto sem precisar ler os outros arquivos.

---

## O que é este projeto

Um **UI Kit Playground** interativo: uma home com cards para cada componente shadcn/ui do projeto, e uma página por componente com preview ao vivo + painel de controles lateral para alterar props em tempo real (variantes, tamanhos, estados, labels, etc.).

URL local: `http://localhost:3000`  
Repositório: `https://github.com/EduZangrossi/projeto-de-teste`

---

## Stack

| Tecnologia | Versão | Observação |
|---|---|---|
| Next.js | 16.1.7 | App Router, Turbopack (`npm run dev`) |
| React | 19 | |
| TypeScript | 5 | strict mode |
| Tailwind CSS | v4 | sem `tailwind.config.js` — config via CSS em `app/globals.css` |
| shadcn/ui | style `radix-maia` | componentes copiados em `components/ui/` |
| Radix UI | via meta-pacote `radix-ui` | importar como `import { X } from "radix-ui"` |
| Remix Icon | `@remixicon/react` | biblioteca de ícones padrão do projeto |
| next-themes | 0.4.6 | dark mode via classe `.dark`, hotkey `D` |
| class-variance-authority | 0.7.1 | para variantes com `cva()` |
| clsx + tailwind-merge | — | via helper `cn()` em `lib/utils.ts` |

---

## Estrutura de pastas

```
app/
  layout.tsx                  # RootLayout: fontes (Geist, Public Sans), ThemeProvider
  globals.css                 # Tailwind v4 + CSS vars de tema (light/dark) + sidebar tokens
  page.tsx                    # Home: grid de cards por categoria
  dashboard/
    page.tsx                  # Redireciona para "/"
  components/
    layout.tsx                # Layout compartilhado das páginas de componente (sidebar + conteúdo)
    accordion/page.tsx
    alert/page.tsx
    avatar/page.tsx
    badge/page.tsx
    button/page.tsx
    card/page.tsx
    checkbox/page.tsx
    input/page.tsx
    progress/page.tsx
    radio-group/page.tsx
    select/page.tsx
    separator/page.tsx
    skeleton/page.tsx
    slider/page.tsx
    switch/page.tsx
    table/page.tsx
    tabs/page.tsx
    textarea/page.tsx
    toggle/page.tsx
    tooltip/page.tsx

components/
  theme-provider.tsx          # Wrapper next-themes com hotkey D para toggle dark/light
  app-sidebar.tsx             # Sidebar com NavGroup[], header slot, highlight ativo via usePathname
  playground.tsx              # Layout preview + painel de controles + helpers de controle
  ui/                         # Componentes shadcn/ui (fonte de verdade local)
    accordion.tsx
    alert-dialog.tsx
    alert.tsx
    aspect-ratio.tsx
    avatar.tsx
    badge.tsx
    button.tsx
    calendar.tsx
    card.tsx
    checkbox.tsx
    collapsible.tsx
    command.tsx
    context-menu.tsx
    dialog.tsx
    dropdown-menu.tsx
    hover-card.tsx
    input-group.tsx
    input.tsx
    label.tsx
    menubar.tsx
    navigation-menu.tsx
    pagination.tsx
    popover.tsx
    progress.tsx
    radio-group.tsx
    scroll-area.tsx
    select.tsx
    separator.tsx
    sheet.tsx
    sidebar.tsx               # Sidebar simples (legado, mantida por compatibilidade)
    skeleton.tsx
    slider.tsx
    switch.tsx
    table.tsx
    tabs.tsx
    textarea.tsx
    toggle.tsx
    tooltip.tsx

lib/
  utils.ts                    # cn(...) = twMerge(clsx(...))
  components-registry.ts      # Fonte única de verdade dos componentes do playground

hooks/                        # Vazio por enquanto
```

---

## Arquivos-chave para entender o projeto

### `lib/components-registry.ts`
Registra todos os 20 componentes do playground. Cada entrada tem:
```ts
{ slug: string, name: string, description: string, category: "Inputs" | "Display" | "Feedback" | "Layout" | "Navigation" }
```
Para adicionar um novo componente ao playground, basta adicionar aqui + criar `app/components/[slug]/page.tsx`.

**Componentes registrados (20):**
- **Inputs (9):** button, input, textarea, checkbox, radio-group, switch, slider, select, toggle
- **Display (9):** badge, avatar, card, skeleton, separator, progress, table, tabs, accordion
- **Feedback (2):** alert, tooltip

### `components/playground.tsx`
Fornece:
- `<Playground title description controls>` — layout com preview (fundo pontilhado) + painel direito
- `<ControlGroup label>` — agrupa um controle com label
- `<ControlSegmented options value onChange>` — botões de seleção de variante (genérico `<T extends string>`)
- `<ControlToggle label value onChange>` — botão on/off
- `<ControlTextInput value onChange placeholder>` — input de texto simples
- `<ControlSlider value onChange min max>` — range slider com valor numérico

### `components/app-sidebar.tsx`
```ts
interface NavGroup { title?: string; items: NavItem[] }
interface NavItem  { label: string; href: string; icon?: ReactNode }
<AppSidebar groups={NavGroup[]} header={ReactNode} />
```
Usa `usePathname()` para highlight ativo. Grupos sem `title` aparecem sem cabeçalho.

### `app/components/layout.tsx`
Layout servidor que monta a sidebar com grupos a partir do `components-registry`. Envolve todas as páginas `app/components/*/page.tsx`.

---

## Padrões e convenções

### Imports
```ts
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { RiArrowDownSLine } from "@remixicon/react"
import { Select as SelectPrimitive } from "radix-ui"   // ← sempre via meta-pacote
```

### Componentes UI (shadcn)
- Sempre usar `data-slot="nome"` nos elementos raiz
- Variantes com `cva()` + `VariantProps`
- `asChild` via `Slot.Root` do radix-ui quando necessário
- `"use client"` quando usa hooks ou primitivos interativos

### Tailwind v4
- Sem arquivo `tailwind.config.js` — tudo via `@theme inline {}` no `globals.css`
- CSS vars em `:root` e `.dark` no `globals.css`
- Tokens: `--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--sidebar-*`, `--chart-*`, `--radius`
- Usar `cn()` para merge de classes condicionais

### Dark mode
- Classe `.dark` no `<html>`
- Hotkey `D` (fora de inputs) via `ThemeProvider`
- Todas as variáveis de cor têm contrapartida no bloco `.dark {}`

### Fontes
- `--font-heading`: Geist
- `--font-sans`: Public Sans
- `--font-mono`: Geist Mono

### next.config.mjs
Webpack polling ativado para dev no Windows (resolve hot reload de novos arquivos):
```js
poll: 500, aggregateTimeout: 200, ignored: ["**/node_modules/**", "**/.next/**"]
```

---

## Como adicionar um novo componente ao playground

1. **Registrar** em `lib/components-registry.ts`:
```ts
{ slug: "meu-componente", name: "Meu Componente", description: "...", category: "Display" }
```

2. **Criar a página** em `app/components/meu-componente/page.tsx`:
```tsx
"use client"
import { Playground, ControlGroup, ControlSegmented } from "@/components/playground"
import { MeuComponente } from "@/components/ui/meu-componente"

export default function MeuComponentePage() {
  return (
    <Playground title="Meu Componente" description="..." controls={<>...</>}>
      <MeuComponente />
    </Playground>
  )
}
```

3. A sidebar e os cards da home são gerados automaticamente a partir do registry.

---

## Scripts

```bash
npm run dev        # Next.js dev com Turbopack
npm run build      # Build de produção
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run format     # Prettier em todos os .ts/.tsx
```

---

## O que NÃO existe ainda

- Testes (Jest, Playwright, etc.)
- Storybook
- Páginas de playground para: alert-dialog, dialog, dropdown-menu, sheet, popover, command, calendar, hover-card, context-menu, menubar, navigation-menu, pagination, scroll-area, collapsible, input-group, aspect-ratio (os componentes existem em `components/ui/` mas não têm página)
- Autenticação
- Banco de dados
