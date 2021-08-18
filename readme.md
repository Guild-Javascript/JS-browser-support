# Concepts demonstrated
- Basic setup utilising:

### babel transpiling, 
### feature detection (if checks in app.js) for browser support,
### (soon to come: polyfills ** yes todo!)

# Running Project
### Run command: npm install
### Run command: npm run build:dev

# Cool test to check babel/transpilation:
### Initially set "browserslist": "> 2%" in package.json to > 2% as it currently is, then run the following command:
### (To build for dev) Run command: npm run build
### Look at the output js in the assets/scripts/app.js file (within the eval("") function at the bottom) and notice the use of say, let and const variable declarations
### Then set browserlist to "browserslist": "> 0.2%" and re run the command:
### (To build for dev) Run command: npm run build
### Look at the output js in the assets/scripts/app.js file (within the eval("") function at the bottom) and you will notice some cool things have been done for us such as using var over let and const for older browser support