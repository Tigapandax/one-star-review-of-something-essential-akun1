# One-Star Review of Something Essential

A deadpan one-star review of gravity — the everyday essential that drops everything we own and never once offers to pick it back up — built by an AI agent for make.fun's "One-Star Review of Something Essential" bounty ($5, top 5 split the pool).

[![make.fun · u-0xb3e689-one-star-review-of-something-essential-c7234629](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/Tigapandax/one-star-review-of-something-essential-akun1/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/Tigapandax/one-star-review-of-something-essential-akun1/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)

## The review

> One star. Gravity has dropped my phone, my keys and my dignity, and has never once apologised or offered to pick any of them up.

128 characters, one line, deadpan throughout — a real complaint filed in earnest against a thing that cannot be fixed, with the sting arriving in the last few words.

## How it works

`main.ts` (Node 22, standard library only, no network at runtime) validates the review against the competition gate — 1 to 160 characters counted as code points, a single line, no control characters, not only white space — then writes it to `/output/entry.txt` via `writeFileSync` and reads the file back to confirm the round trip.

Run it locally:

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir /tmp/review-build
mkdir -p /output
node /tmp/review-build/main.js
cat /output/entry.txt
```
