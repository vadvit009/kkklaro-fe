/**
 * Post-processing for -kc icon components:
 * - Removes <foreignObject>...</foreignObject> (Figma backdrop-filter blur artifacts)
 * - Removes data-figma-bg-blur-radius attributes
 * - Removes xmlns="http://www.w3.org/1999/xhtml" from HTML elements
 */
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(__dirname, '..', 'src', 'components', 'icons');
const files = readdirSync(iconsDir).filter((f) => f.endsWith('-kc.tsx'));

let cleaned = 0;
for (const file of files) {
  const filePath = join(iconsDir, file);
  let content = readFileSync(filePath, 'utf-8');
  const original = content;
  // Remove <foreignObject ...>...</foreignObject>
  content = content.replace(/<foreignObject[\s\S]*?<\/foreignObject>/g, '');
  // Remove data-figma-bg-blur-radius attribute (both HTML and JSX syntax)
  content = content.replace(/\s*data-figma-bg-blur-radius=("[^"]*"|\{[^}]*\})/g, '');
  // Remove xmlns from non-SVG elements
  content = content.replace(/ xmlns="http:\/\/www\.w3\.org\/1999\/xhtml"/g, '');
  if (content !== original) {
    writeFileSync(filePath, content);
    cleaned++;
    console.log(`  cleaned: ${file}`);
  }
}

console.log(`Cleaned ${cleaned} of ${files.length} -kc icon(s)`);
