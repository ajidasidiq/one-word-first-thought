// One Word, First Thought — make.fun entry
// Writes exactly one word, the first that comes to mind, to /output/entry.txt.
//
// Candidate words considered: petrichor, vellichor, apricity, sonder,
// defenestration, snollygoster, borborygmus.
// Picked: "borborygmus" — the low rumble of a hungry stomach. It is
// surprising (nobody guesses it), vivid (you can hear and feel it at
// once), and witty (the word itself rumbles like the thing it names).
// Far less likely to be duplicated than the obvious "petrichor".

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "borborygmus";
const OUTPUT_PATH = "/output/entry.txt";

// Validate the entry the same way the gate does: UTF-8 text, 1-24
// characters, not whitespace-only, and exactly one word (no spaces).
function validate(word: string): void {
  if (word.length < 1 || word.length > 24) {
    throw new Error(`entry must be 1-24 characters, got ${word.length}`);
  }
  if (word.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be exactly one word (no whitespace)");
  }
}

validate(WORD);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, "utf8");
console.log(`Wrote entry to ${OUTPUT_PATH}: ${WORD}`);
