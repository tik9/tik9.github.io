const rege = require('./funct3');
const assert = require('assert');

test('Returns test', () => {
    expect(rege('"test"')).toBe('"test"');
});

describe('Simple Test', () => {
 it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
});
