# enumize

Simple js functions converts arrays to enum objects.

[![Coverage Status](https://coveralls.io/repos/github/Devoter/enumize/badge.svg?branch=master)](https://coveralls.io/github/Devoter/enumize?branch=master)

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
