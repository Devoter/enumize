const assert = require('assert');
const enumize  = require('../index.js');

describe('enumize()', function () {
    it('should converts an array to the enum object', function () {
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

        assert.equal(found, 3);
    });

    it('should converts a list of string arguments to the enum object', function () {
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

        assert.equal(found, 3); 
    });

    it('should return `null` if the first argument is not an array or string', function() {
        const enumObject = enumize(1, 2, 3);

        assert.equal(enumObject, null); 
    });
});
