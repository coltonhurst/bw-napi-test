# bw-napi-test

## To Run

1. `git clone https://github.com/coltonhurst/bw-napi-test.git`
2. Update `src/index.ts` with the correct values to connect to your Bitwarden servers and organization
2. `npm ci`
3. `npm run start`

## TS & Node Project Setup Steps

1. `npm init -y`
2. `npm install typescript --save-dev`
3. `npm i -D @types/node`
4. In `package.json`:
    - Set `"type"` to `"module"`
    - Add this script: `"start": "tsc && node ./dist/index.js"`
5. Create a `src` dir
6. Create `src/index.ts`
7. Create a `tsconfig.json` file based on the one below

For this project (`bw-napi-test`), I then installed the SM SDK ([npm link](https://www.npmjs.com/package/@bitwarden/sdk-napi)) and used the getting started code.

### tsconfig.json

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
