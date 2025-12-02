# Portfolio Site - AI Coding Agent Instructions

## Project Architecture

This is a **single-page React portfolio** built with Vite, Bun, and Tailwind CSS v4. All content is data-driven from `src/data/portfolio.json` and rendered through section components.

**Key architectural patterns:**

- **Data-driven content**: `App.jsx` imports `portfolio.json` and passes sections to components via props (`data={portfolioData.hero}`)
- **Component structure**: Each section (Hero, Skills, Experience, Projects, Contact) receives a `data` prop matching its JSON structure
- **UI components**: shadcn/ui components in `src/components/ui/` using Radix UI primitives with custom Tailwind styling
- **No routing**: All sections render on a single page with anchor-based navigation (`#skills`, `#projects`, etc.)

## Development Workflow

```bash
bun run dev      # Start dev server (Vite with HMR)
bun run build    # Production build
bun run preview  # Preview production build
bun run lint     # ESLint validation
```

The dev server uses Vite's Fast Refresh for instant updates. No separate backend or API server needed.

## Content Management

**To modify portfolio content**, edit `src/data/portfolio.json` directly. Structure is:

```json
{
  "hero": { "name", "title", "description", "actions", "image" },
  "skills": { "title", "description", "categories": [{ "title", "items": [{ "name", "icon" }] }] },
  "experience": { "title", "description", "jobs": [{ "role", "company", "period", "achievements" }] },
  "projects": { "title", "description", "items": [{ "title", "description", "tags", "link" }] },
  "contact": { "title", "description", "email", "socials" }
}
```

**Never hardcode content** in components—always use the `data` prop structure from JSON.

## Styling Conventions

- **Tailwind CSS v4** (note: using new syntax with `@import "tailwindcss"` in `index.css`)
- **Design system**: Custom theme variables defined in `src/index.css` under `:root` and `.dark` for dark mode
- **Colors**: Primary (green `#00f5a0`) and secondary for gradients; use semantic tokens like `bg-card`, `text-muted-foreground`
- **Animations**: `tw-animate-css` plugin for entrance animations (e.g., `animate-in fade-in slide-in-from-bottom-4`)
- **Component styling**: Use `cn()` utility from `@/lib/utils` for conditional className merging

Example from `Hero.jsx`:

```jsx
<h1 className="text-foreground text-4xl font-black animate-in fade-in slide-in-from-bottom-4 duration-1000">
```

## Path Aliases

Configured in `vite.config.js` and `components.json`:

```javascript
"@" → "./src"
"@/components" → "./src/components"
"@/lib/utils" → "./src/lib/utils"
```

Always use `@/` imports, never relative paths beyond parent directory.

## shadcn/ui Integration

This project uses **shadcn/ui in JSX mode** (not TypeScript). Components follow the "New York" style variant.

**IMPORTANT: Before creating any new UI component**, always check `src/components/ui/` first to see if it already exists. Reuse existing components to avoid redundancy.

**When adding shadcn components:**

1. Check if the component already exists in `src/components/ui/`
2. If not, run `bunx shadcn@latest add <component-name>`
3. Components auto-install to `src/components/ui/`
4. Configuration is in `components.json`

**Existing UI components**: `avatar`, `badge`, `button`, `card`, `separator` (see `src/components/ui/`)

All UI components use `data-slot` attributes for internal styling (e.g., `data-slot="card-header"`).

## Component Patterns

**Section components** (Hero, Skills, Experience, Projects, Contact):

- Receive `data` prop from `App.jsx`
- Include `id` attribute for anchor navigation (e.g., `id="skills"`)
- Use semantic HTML5 `<section>` tags
- Consistent spacing: `py-10 md:py-20` for sections

**Example component signature:**

```jsx
export default function Projects({ data }) {
  return (
    <section className="py-10 md:py-20" id="projects">
      ...
    </section>
  );
}
```

## Icons & Assets

- **Icons**: `lucide-react` for all icons (e.g., `<Mail />`, `<ArrowRight />`)
- **Profile image**: Loaded from external URL in `portfolio.json` (hero.image.src)
- **No local image assets**: Use URLs or data URIs if needed

## Responsive Design

Mobile-first approach with Tailwind breakpoints:

- `sm:` → 640px
- `md:` → 768px (primary desktop breakpoint)
- Layout shifts: `flex-col` → `md:flex-row`, single column → `md:grid-cols-3`

## Key Files to Modify

- **Content updates**: `src/data/portfolio.json`
- **Styling/theme**: `src/index.css` (color variables, theme tokens)
- **Component logic**: `src/components/{Hero,Skills,Experience,Projects,Contact}.jsx`
- **Global layout**: `src/App.jsx` (section order, page structure)

## ESLint Rules

- Flat config format (ESLint v9)
- React Hooks rules enforced
- Custom rule: unused variables starting with uppercase or underscore are allowed
- No TypeScript checking (pure JSX project)

## Package Management

This project uses **Bun** as the package manager (not npm/yarn/pnpm).

**Install dependencies:** `bun install`  
**Add packages:** `bun add <package-name>`  
**Add dev dependencies:** `bun add -d <package-name>`  
**Remove packages:** `bun remove <package-name>`

## Common Tasks

**Add a new section:**

1. Create component in `src/components/NewSection.jsx` with `data` prop
2. Add data structure to `portfolio.json`
3. Import and render in `App.jsx` between `<main>` tags
4. Add navigation link in `Header` component

**Update colors/theme:**
Edit CSS custom properties in `src/index.css` under `:root` or `.dark` scope.

**Add animation:**
Use `animate-in` utilities from `tw-animate-css` with delays: `animate-in fade-in duration-1000 delay-500 fill-mode-forwards opacity-0`
