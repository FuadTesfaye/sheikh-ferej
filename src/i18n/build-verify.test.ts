import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const OUTPUT_DIR = join(process.cwd(), ".vercel/output");

function collectJsFiles(dir: string): string[] {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) return collectJsFiles(fullPath);
    if (entry.name.endsWith(".js") || entry.name.endsWith(".mjs")) return [fullPath];
    return [];
  });
}

describe("production build includes i18n", () => {
  it("bundles translation strings in client and server output", () => {
    const bundles = collectJsFiles(OUTPUT_DIR);
    expect(bundles.length).toBeGreaterThan(0);

    const combined = bundles.map((file) => readFileSync(file, "utf8")).join("\n");

    // Spot-check keys that must not be tree-shaken from production bundles.
    expect(combined).toContain("Knowledge is light.");
    expect(combined).toContain("Sheikh Muhammed Ferej Megeno");
    expect(combined).toContain("መነሻ"); // Amharic nav.home
    expect(combined).toContain("Mana"); // Oromo nav.home
  });
});
