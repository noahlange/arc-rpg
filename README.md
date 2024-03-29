# arc

A cyberpunky tabletop RPG with an emphasis on verisimilitude and non-emphasis on specific setting _stuff_. Because seriously, just get [Cities Without Number](https://preview.drivethrurpg.com/en/product/449873/cities-without-number-free-version) and use that. It's objectively better than whatever I could spin up.

## Features

- [triangular](https://en.wikipedia.org/wiki/Triangular_number) character progression
  - for continuous, granular advancement without percentile dice
- six stats, similar to d20
  - DEX, AGI, CON, INT, PER, CHA
- skill-based, unopinionated re: classes
  - checks are d20, roll-under (blackjack rules)
  - degrees of success/failure
  - intuitive, granular skill progression
  - specialization vs. generalization
- other stuff
  - crafting and modifications
  - robust, verisimilar hacking mechanic
  - stupidly-detailed firearms mechanics
  - wounds/healing mechanics
- custom icon font

## Icon font

There's an icon font (`arc.ttf`) living in the Unicode PUA between `u+f100` and `u+f200`, mostly derived from mlorc, wildabeast, skoll and sbed's work on [game-icons](http://game-icons.net).

| Range       | Icons                    |
| :---------- | ------------------------ |
| f100 - f107 | dice                     |
| f110 - f115 | damage types             |
| f120 - f122 | character stats          |
| f123 - f134 | resource + status tracks |
| f150 - f160 | item stats               |

![font repertoire](font.png)

## Vale

It uses Vale for linting. Once you've installed that, you can run <kbd>npm install</kbd> and it'll install the vale `proselint` package, along with `prettier`.

- <kbd>npm run format</kbd>: runs prettier on everything in `content` and `docs`
- <kbd>npm run lint</kbd>: runs Vale for text linting
