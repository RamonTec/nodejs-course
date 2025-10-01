
# NodeJS Course.

This project was created to put in practice new concepts relationend with Nodejs.

First, NodeJS is an runtime enviroment and open source.
It's not a language.

It's made with C, C++ and Javascript using V8 Engine.
We can build projects with nodejs an execuete in differents devices, like phone, servers, tv etc...

An important think about Nodejs is a single-threaded to execute javascript code.

# Single-threaded - Event Loop.
First, in computing a thread is the smallest unit of processing that can be scheduled by an operating system.
NodeJs employs a single-threaded model, use a single threaded to handle multiple tasks.
To get this nodejs leverages an event-driver, non-blocking I/O model.

# Module system in NodeJS.
Modules are fundamental to build robust and maintenable applications, we can encapsulate logic into code blocks with specific functionalities.
Allow to use create complex structures from simple and reusable componentes or code blocks.


 


## Features

- Facilities code maintenance
- Avoids conflicts in large-scale applications
- Reuse logic across our application




# Modules type

## CommonJS (CJS)
Is the original nodejs system, which uses:

- Require to import modules
- Module.exports to export modules
- File extension .js
- Execution type: Sysnchronous
- Default system since the beginning of nodejs

## ES Module (ESM)
Is the modern module system, compatible with ECMAScript 6+

- Use import and export
- File extension .mjs
- Execution type: Asynchronous by design
- Stable since nodejs 14, available as experimental since nodejs 12

## Native modules
Native modules come into the built of Nodejs, that means that we can use them without adding manually.

- Fs: Reading file system
- Http: To make request and creating http services
- Path: Accesing to file paths
- Os: Interact with operating system

Thir party are those libraries that we can add into our project using npm install, for example:
npm i is-odd

In my opinion we should use one module system between commonjs and es-module, to generate consistency throught the project.

Also, for new projects i'll recommend to work with es-module instead of using commonjs system.

