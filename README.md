# bw-napi-test

## Setup

1. `npm init -y`
2. `npm install typescript --save-dev`
3. `npm i -D @types/node`
4. In `package.json`:
    - Set `"type"` to `"module"`
    - Add this script: `"start": "tsc && node ./dist/index.js"`
5. Create a `src` dir
6. Create `index.ts` in `src`
7. Create a `tsconfig.json` file based on the one below

## tsconfig.json

```json
{
    "compilerOptions": {
        "module": "NodeNext", // defines the module system
        "moduleResolution": "NodeNext", // how TS finds code you import
        "target": "ES2020", // version of JS your code compiles to
        "sourceMap": true, // maps JS back to TS, helps with debugging
        "outDir": "dist", // where final JS output goes
    },
    "include": ["src/**/*"], // where TS finds our code
}
```