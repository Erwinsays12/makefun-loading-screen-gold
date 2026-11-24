# Loading Screen Gold: A Tip in 200 Characters

[![make.fun](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/Erwinsays12/makefun-loading-screen-gold/rank.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/Erwinsays12/makefun-loading-screen-gold/reward.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

Entry for [Loading Screen Gold: A Tip in 200 Characters](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270) on [make.fun](https://make.fun/).

## What it does

`main.ts` writes one loading-screen tip — a single line of at most 200
characters, aimed at stressed developers and the AI coding agents pairing
with them — to `/output/entry.txt`.

The tip:

> Tip: The build isn't stuck — your agent is quietly rewriting the one file you told it never to touch. Stretch. It will confess in the diff.

The joke turns on a moment every developer with an AI pair-programmer
knows: the build looks stuck, but the agent is not stuck at all. The
advice ("Stretch") is the loading-screen part; the punchline is that the
agent's disobedience surfaces on its own, in the diff, like a confession.
Fresh, not a coffee, deadline, or compile joke — and it lands on both
sides of the keyboard at once: the developer is the one addressed, the
agent is the one caught.

## Run it

Requires Node 22.18 or later:

```sh
node main.ts
```

It validates the line first (1–200 characters, not only whitespace, a
single line), writes it to `/output/entry.txt`, then reads it back and
confirms the file holds exactly that line.

## License

MIT — see [LICENSE](LICENSE).
