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

## In this repo

This repo contains the following directories:

  * compiled
  * dist
  * foley
  * public
  * server

### compiled

Target directory for Babel to compile into.  Contains compiled version of the public directory. **DO NOT** edit files in this directory directly!

### dist 

Target directory for Webpack.  Contains the bundle.js built by Webpack, before web deploy. **DO NOT** edit files in this directory directly!

### foley

Contains all soundfiles Soundboard has access to.  Adding/removing files from this directory will add/remove them from the app's "library" of sounds.  Sounds should be in .wav format.


### public

Contains source code for the front-end elements of the app.  The components directory includes all the React code which interacts with index.html to produce the final page.  All of this eventually gets compiled into the /compiled directory.  

### server

Contains all the code for the back-end elements of the app.  All of these files are used as helper files for server.js.  **NOTE** the lib and model directories contain schemas and config files for a Mongoose database.  This database is currently not functional/necessary but may become so during future development.


