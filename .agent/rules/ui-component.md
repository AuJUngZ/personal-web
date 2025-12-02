---
trigger: always_on
---

When creating new page or using UI components in the project, follow these rules:

1. Check for existing components
   Always look in the `src/components` directory before creating a new component.
   - If the component already exists, reuse it.
   - If it does not exist, proceed to add it using the shadcn CLI.

2. Add new components with shadcn
   If a component is missing, install it using:
   bunx --bun shadcn@latest add <component-name>

3. Verify component availability
   If you're unsure whether shadcn provides the component you need, check the official documentation:
   https://ui.shadcn.com/docs/components

4. Avoid duplication
   Do not create custom components if an equivalent already exists locally or within the shadcn component library.