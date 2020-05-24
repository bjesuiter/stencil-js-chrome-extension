# Stencil JS Chrome Extension - Blogpost 

- Want to show you one way of writing super nice but simple chrome extensions

Premises: 
- not too much framework junk
- working with components, to avoid document.querySelector etc. 

Problems when using bigger things, like ionic & angular 
- filesize is huge (TODO: Test this )
- compiles badly
- Setting up multiple root pages is difficult (for example: for the extension's option page, main page when clicking the extension icon, etc.)

## Steps

- init this project with `npm init stencil`
- init git repo inside this project with `git init`
- update dependencies, esp. stencil core