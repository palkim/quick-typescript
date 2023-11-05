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

