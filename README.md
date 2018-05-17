# enumize

Simple js functions converts arrays to enum objects.

[![Coverage Status](https://coveralls.io/repos/github/Devoter/enumize/badge.svg?branch=master)](https://coveralls.io/github/Devoter/enumize?branch=master) [![Build Status](https://travis-ci.org/Devoter/enumize.svg?branch=master)](https://travis-ci.org/Devoter/enumize) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FDevoter%2Fenumize.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FDevoter%2Fenumize?ref=badge_shield)

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


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FDevoter%2Fenumize.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FDevoter%2Fenumize?ref=badge_large)