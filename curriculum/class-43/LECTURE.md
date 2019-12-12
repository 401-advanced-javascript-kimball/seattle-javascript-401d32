# Class 43 Webpack Babel and Typescript

## Webpack

- What is?
  - Dependency bundler
  - This uses a configuration, to specify extensions and loaders, and makes a unified `bundle` of code frou your source files:

```md
|-src
|--app.jsx
|-index.html
|-assets
|--icon.png

=>

|-bundle.js
|-index.html
|-icon.png
```

- webpack build
  -wepback crawl you file structure and place all your source code in a single (or multiple) place(s).

- Webpack uses libraries called `loaders` to find specific file extensions, and load them into your bundle.

## Babel

- This is a javascript transpiler
  - We're fancy new JS syntax, and turning it into js that is environment specific, (for us that is a more standardized version of js, for browsers).

```js
let myVariable = 'string';

=>

var myVariable = 'string';
```

## TypeScript

- is a superset of JS, that adds Types!!!
- It uses a compiler to transform your Typescript syntax into JavaScript:

```ts
let myString: String = 'Hey there';

function ParseString(str: String) {
  ...
}
```
