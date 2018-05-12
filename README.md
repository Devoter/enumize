# enumize

Simple js functions converts arrays to enum objects.

## Installation

`npm install enumize`

## Usage

From array:
```js
const enumize = require('enumize');

const myEnum = enumize(['zero', 'one', 'two']);

console.log(myEnum.one); // 1
```

From arguments list:
```js
const enumize = require('enumize');

const myEnum = enumize('zero', 'one', 'two');

console.log(myEnum.one); // 1
```

## License

[MIT](LICENSE)
