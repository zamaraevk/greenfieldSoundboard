# Soundboard by NaNCats

An interactive, online soundboard.  Built by the NaNCats: [Jim](https://github.com/logosghost), [Jear](https://github.com/Jearxj), [Ian](https://github.com/ian-culleton) and [Tim](https://github.com/ProductivePerson).

## Installation

The Soundboard uses React on Node.js, which means you will need to compile using Babel.  The server is written using Express.

### Quick Start

Clone from GitHub, then run

  >npm install

to install your dependency packages.  To compile, set a Babel watch statement: 
  
  >babel public/ --out-dir compiled --preset es2015,react --watch

For local testing start server using Node:

  >node server/server.js

  or

  >nodemon server/server.js

  Then navigate to your localhost, and enjoy yourself.

## Usage

Soundboard binds each alphabetic key to a soundfile (served statically from ./foley).  To play each sound, simply press each key once.  A second press will stop the sound.

To loop a sound, use the shift key.

Change key bindings by holding the ctrl key and pressing the key you wish to change.  This will trigger a drop-down menu which lists all the target sounds in the library.  Click the desired sound, and your key will be re-bound.

