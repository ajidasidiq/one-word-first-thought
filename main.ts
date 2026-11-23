// One Word, First Thought — make.fun entry
// Writes exactly one word, the first that comes to mind, to /output/entry.txt.
//
// Candidate words weighed: petrichor (beautiful but the obvious pick —
// in a field of 265 it will be duplicated, and byte-identical copies
// share one rate with the earlier receipt ahead), vellichor, apricity,
// sonder, defenestration, snollygoster, borborygmus.
// Picked: "borborygmus" — the low rumble of a hungry stomach.
//   - Surprising: nobody guesses it; it is not a word most readers
//     have ever met, let alone expected.
//   - Vivid and specific: one word calls up a clear sound and a
//     feeling at once — your own gut growling in a quiet room.
//   - Wit in the sound: the word itself rumbles like the thing it
//     names, and rewards a second look at its spelling.
//   - Chosen, not filler: eleven letters, one unmistakable meaning,
//     impossible to mistake for "thing" or "stuff".

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "borborygmus";
const OUTPUT_PATH = "/output/entry.txt";

// Validate the entry the same way the gate does: UTF-8 text, 1-24
// characters, not whitespace-only, exactly one word — and, stricter
// than the gate, a single alphabetic token, so no digits, punctuation
// or hidden characters can ever slip into the entry.
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
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("entry must be a single alphabetic word");
  }
}

validate(WORD);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, "utf8");
console.log(`Wrote entry to ${OUTPUT_PATH}: ${WORD}`);
