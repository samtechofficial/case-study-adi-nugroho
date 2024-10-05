const assert = require('assert');
const firstMissingPositive = require('../firstMissingPositive');

// Unit Test Cases
try {
    // Test case 1: Input: [1, 2, 0] should return 3
    assert.strictEqual(firstMissingPositive([1, 2, 0]), 3);
    console.log('Test case 1 PASSED');

    // Test case 2: Input: [3, 4, -1, 1] should return 2
    assert.strictEqual(firstMissingPositive([3, 4, -1, 1]), 2);
    console.log('Test case 2 PASSED');

    // Test case 3: Input: [7, 8, 9, 11, 12] should return 1
    assert.strictEqual(firstMissingPositive([7, 8, 9, 11, 12]), 1);
    console.log('Test case 3 PASSED');

    // Test case 4: Input: [1] should return 2
    assert.strictEqual(firstMissingPositive([1]), 2);
    console.log('Test case 4 PASSED');

    // Test case 5: Input: [2] should return 1
    assert.strictEqual(firstMissingPositive([2]), 1);
    console.log('Test case 5 PASSED');

    // Test case 6: Input: [1, 1, 1] should return 2
    assert.strictEqual(firstMissingPositive([1, 1, 1]), 2);
    console.log('Test case 6 PASSED');

    // Test case 7: Input: [-1, -2, -3] should return 1
    assert.strictEqual(firstMissingPositive([-1, -2, -3]), 1);
    console.log('Test case 7 PASSED');

    // Test case 8: Input: [0, 0, 0] should return 1
    assert.strictEqual(firstMissingPositive([0, 0, 0]), 1);
    console.log('Test case 8 PASSED');

    // Test case 9: Input: [4, 5, 6, 7] should return 1
    assert.strictEqual(firstMissingPositive([4, 5, 6, 7]), 1);
    console.log('Test case 9 PASSED');

    // Test case 10: Input: [1, 2, 3, 4, 5] should return 6
    assert.strictEqual(firstMissingPositive([1, 2, 3, 4, 5]), 6);
    console.log('Test case 10 PASSED');

} catch (error) {
    console.log('Test case FAILED:', error.message);
}
