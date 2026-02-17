# Icons

⚠️ **Auto-generated components. Do not edit manually!**

## Adding New Icons

There are two types of icons, stored in separate folders:

| Folder             | Behavior                                    | Use case                                    |
| ------------------ | ------------------------------------------- | ------------------------------------------- |
| `assets/icons/`    | SVGO optimization + colors → `currentColor` | Mono icons controlled via Tailwind `text-*` |
| `assets/icons-kc/` | No optimization, original colors preserved  | Multicolor icons, logos, illustrations      |

1. Add SVG to the appropriate folder (kebab-case: `arrow-down.svg` or `logo-kc.svg`)
2. Run generation:
   ```bash
   npm run icons          # Generate once
   npm run icons:watch    # Auto-regenerate on changes (only assets/icons/)
   ```
3. Import and use:
   ```tsx
   import { ArrowDown, LogoKc } from "@/components/icons";
   ```

## SVG Requirements

- **viewBox** - required (e.g., `viewBox="0 0 24 24"`)
- For `assets/icons-kc/` — ask the designer to export **flattened/outlined** SVG without Figma effects (`backdrop-filter`, `foreignObject`, etc.)
- Post-processing (`scripts/clean-kc-icons.cjs`) automatically removes common Figma artifacts from `-kc` components

## Usage

```tsx
import { ArrowDown, Menu, LogoBgKc } from '@/components/icons';

// Mono icon — color via Tailwind
<ArrowDown className="w-6 h-6 text-purple-primary" />

// With hover
<Menu className="w-6 h-6 text-text-secondary hover:text-purple-accent transition-colors" />

// Multicolor icon — original colors
<LogoBgKc className="w-20 h-20" />
```

## How It Works

`npm run icons` runs three steps:

1. `svgr` with `.svgrrc.cjs` — generates optimized mono icons from `assets/icons/`
2. `svgr` with `.svgrrc-kc.cjs` — generates color-preserved icons from `assets/icons-kc/` (SVGO disabled)
3. `node scripts/clean-kc-icons.cjs` — removes Figma artifacts (`foreignObject`, `data-figma-bg-blur-radius`, extra `xmlns`)

Both runs output to `src/components/icons/`. Manual exports in `index.ts` (hand-crafted components) are preserved across regenerations.

## Features

- Full Tailwind support (`w-6`, `text-purple-primary`, `hover:scale-110`)
- `cn` utility for class merging
- TypeScript typed (`SVGProps<SVGSVGElement>`)
- kebab-case files, PascalCase components
- `currentColor` for mono icons via `text-*` classes
- `-kc` icons keep original SVG colors
- Manual components in this folder are not overwritten
