import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, no trailing newline: the gate counts 1-160 characters.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "I'm on vacation. My inbox is now handled by an intern — an AI, who is also on vacation.";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
