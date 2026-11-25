const test = require('node:test');
const assert = require('node:assert/strict');
const { add } = require('./calculator');

test('5 + 3 = 8', () => {
    assert.equal(add(5, 3), 8);
});

test('4 + 6 = 10', () => {
    assert.equal(add(4, 6), 10);
});

test('0 + 5 = 5', () => {
    assert.equal(add(0, 5), 5);
});