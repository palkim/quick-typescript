Typescript compiler compiles the typescript code to javascript. Since typescript is eventually compiled to javascript which is not a typed language, people say that typescript is actually not typed since it is compiled to js. Use typescript if you are working in a team and the project is big.

TSC automatically compiles to ES5 so it will compile your ts file variables you coded with "let" to "var" which is not recommended after "let" and "const" is introduced in ES6 since "let" and "const" are block-scoped and "var" is function scoped. -> You can change which JS version you want to compile your TS code in tsconfig.json which tells the typescript compiler what to do. You can also specify rootDir and outDir in tsconfig.json file. 

rootDir -> is where your source files are, the tsc compiler will automatically compile the ts files inside this path
outDir -> is where the compiled js files' go

# Install typescript compiler

```bash
    npm i -g typescript
```

```bash
    tsc -v
```

# Create a tsconfig.json

```bash
    tsc --init
```

# Use tsc compile in watch mode

```bash
    tsc --watch
```

# See the output of the compiled js code

If you want to see the output of console.log() in terminal

```bash
    cd dist
    node index
```

# Run in browser

Open index.html in browser or use live server plugin in VSCode

Name: Live Server
Id: ritwickdey.LiveServer
Description: Launch a development local Server with live reload feature for static & dynamic pages
Version: 5.7.9
Publisher: Ritwick Dey
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer


