# Icons

⚠️ **Auto-generated components. Do not edit manually!**

## Adding New Icons

1. Add SVG to `assets/icons/` (kebab-case: `arrow-down.svg`)
2. Run generation:
   ```bash
   npm run icons          # Generate once
   npm run icons:watch    # Auto-regenerate on changes
   ```
3. Import and use:
   ```tsx
   import { ArrowDown } from "@/components/icons";
   ```

## SVG Requirements

- **viewBox** - required (e.g., `viewBox="0 0 24 24"`)
- **Size** - typically 24×24 or 16×16
- **Colors** - use `currentColor` for Tailwind support

**Example:**

```svg
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M..." fill="currentColor" />
</svg>
```

## Usage

```tsx
import { ArrowDown, Menu } from '@/components/icons';

// Basic
<ArrowDown className="w-6 h-6 text-purple-primary" />

// With hover
<Menu className="w-6 h-6 text-text-secondary hover:text-purple-accent transition-colors" />

// Responsive
<ArrowDown className="w-4 h-4 md:w-6 md:h-6" />

// With props
<Menu strokeWidth={2} aria-label="Menu" onClick={() => {}} />
```

## Features

✅ Full Tailwind support (`w-6`, `text-purple-primary`, `hover:scale-110`)
✅ `cn` utility for class merging
✅ TypeScript typed (`SVGProps<SVGSVGElement>`)
✅ kebab-case files, PascalCase components
✅ `currentColor` for dynamic colors via `text-*` classes
