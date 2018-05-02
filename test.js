const enumize  = require('./index.js');

class Tester {
    constructor() {
        this._tests = [];
    }

    it(message, func) {
        this._tests.push({message: message, func: func});
    }

    run() {
        for (let i = 0; i < this._tests.length; ++i) {
            console.log(`Test #${i + 1}: ${this._tests[i].message}`);
            this._tests[i].func(Tester.assert);
        }
    }

    static assert(expected, message) {
        console.log(expected ? '[Success]' : '[Failed]', message);
    }
}

const tester = new Tester();

tester.it('Function should converts an array to the enum object', function (assert) {
    const enumObject = enumize(['one', 'two', 'three']);

    let found = 0;
    for (let el in enumObject) {
        if (!enumObject.hasOwnProperty(el)) continue;

        if ((el === 'one' && enumObject[el] === 0) || (el === 'two' && enumObject[el] === 1) ||
            (el === 'three' && enumObject[el] === 2))
            ++found;
        else
            --found;
    }

    assert(found === 3, 'Array "[\'one\', \'two\', \'three\']" is converted to the enum object "{\'one\': 0, \'two\': 1, \'three\': 2}"');
});

tester.it('Function should converts a list of string arguments to the enum object', function (assert) {
    const enumObject = enumize('one', 'two', 'three');

    let found = 0;
    for (let el in enumObject) {
        if (!enumObject.hasOwnProperty(el)) continue;

        if ((el === 'one' && enumObject[el] === 0) || (el === 'two' && enumObject[el] === 1) ||
            (el === 'three' && enumObject[el] === 2))
            ++found;
        else
            --found;
    }

    assert(found === 3, 'List of arguments "\'one\', \'two\', \'three\'" is converted to the enum object "{\'one\': 0, \'two\': 1, \'three\': 2}"'); 
});

tester.it('Function should return `null` if the first argument is not an array or string', function(assert) {
    const enumObject = enumize(1, 2, 3);

    assert(enumObject === null, 'List of integer arguments "1, 2, 3" is not converted to the enum object (returns `null`)'); 
});



tester.run();
