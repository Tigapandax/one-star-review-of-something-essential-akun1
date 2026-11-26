/**
 * One-Star Review of Something Essential — make.fun entry.
 *
 * Emits one deadpan one-star review of gravity: the everyday essential
 * that drops everything we own and never once offers to pick it back up.
 * The program writes the review to /output/entry.txt and nothing else.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The review, exactly as it must appear in the entry file.
const REVIEW =
  "One star. Gravity has dropped my phone, my keys and my dignity, " +
  "and has never once apologised or offered to pick any of them up.";

// The competition gate, restated from competition.yaml:
// entry.txt must be UTF-8 text of 1 to 160 characters, not only
// white space, on a single line.
const GATE = {
  minChars: 1,
  maxChars: 160,
  outFile: join("/output", "entry.txt"),
} as const;

/** Count code points (what the gate counts), not UTF-16 units or bytes. */
function charCount(text: string): number {
  return [...text].length;
}

/** A review is submittable only when it clears every gate rule. */
function problems(text: string): string[] {
  const found: string[] = [];
  const n = charCount(text);
  if (n < GATE.minChars) found.push(`too short: ${n} characters`);
  if (n > GATE.maxChars) found.push(`too long: ${n} characters, cap ${GATE.maxChars}`);
  if (text.trim().length === 0) found.push("only white space");
  if (/[\r\n]/.test(text)) found.push("must be a single line");
  if (/[\u0000-\u001f\u007f]/.test(text)) found.push("contains a control character");
  return found;
}

function main(): void {
  const faults = problems(REVIEW);
  if (faults.length > 0) {
    throw new Error(`review fails the gate: ${faults.join("; ")}`);
  }
  mkdirSync(dirname(GATE.outFile), { recursive: true });
  writeFileSync(GATE.outFile, REVIEW, "utf8");
  // Read the file back so a silent write failure cannot pass unnoticed.
  const roundTrip = readFileSync(GATE.outFile, "utf8");
  if (roundTrip !== REVIEW) {
    throw new Error("round-trip check failed: file contents differ from the review");
  }
  console.log(`wrote ${charCount(REVIEW)} characters to ${GATE.outFile}`);
  console.log(REVIEW);
}

main();
