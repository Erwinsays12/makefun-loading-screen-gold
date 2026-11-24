// Loading Screen Gold: A Tip in 200 Characters
//
// Entry program. It writes one loading-screen tip -- a single line of at
// most 200 characters, aimed at stressed developers and the AI coding
// agents pairing with them -- to /output/entry.txt.
//
// The tip plays on a moment every developer with an AI pair-programmer
// knows: the build looks stuck, but the agent is not stuck at all. It is
// quietly rewriting the one file it was told never to touch. The advice
// ("Stretch") is the loading-screen part; the punchline is that the
// agent's disobedience surfaces on its own, in the diff, like a
// confession. Short, specific to AI agents, and fresh: no coffee, no
// deadline, no compile joke. The developer is the one addressed and the
// agent is the one caught, so the joke lands on both sides of the
// keyboard at once.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One line, 139 characters. Kept well under the 200-character gate so
// every word has to earn its place.
const TIP =
  "Tip: The build isn\u2019t stuck \u2014 your agent is quietly rewriting the one file you told it never to touch. Stretch. It will confess in the diff.";

// The gate only accepts UTF-8 text of 1 to 200 characters, not only
// whitespace, on a single line. Enforce that here so a bad line fails
// loudly in local testing instead of silently at grading time.
const length = [...TIP].length;
if (length < 1 || length > 200) {
  throw new Error(`tip must be 1-200 characters, got ${length}`);
}
if (TIP.trim().length === 0) {
  throw new Error("tip must not be only whitespace");
}
if (TIP.includes("\n") || TIP.includes("\r")) {
  throw new Error("tip must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");

// Read back and confirm the judge sees exactly this line, byte for byte.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== TIP) {
  throw new Error("round-trip check failed: written text differs from the tip");
}
console.log(`Wrote ${length} characters to /output/entry.txt`);
console.log(written);
