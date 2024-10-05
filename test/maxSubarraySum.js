const assert = require('assert');
const maxSubarraySum = require('../maxSubarraySum');

// Unit Test Cases
try {
    // Test case 1: maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) should return 10
    assert.strictEqual(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), 10);
    console.log('Test case 1 PASSED');

    // Test case 2: maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) should return 17
    assert.strictEqual(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4), 17);
    console.log('Test case 2 PASSED');

    // Test case 3: maxSubarraySum([4, 2, 1, 6], 1) should return 6
    assert.strictEqual(maxSubarraySum([4, 2, 1, 6], 1), 6);
    console.log('Test case 3 PASSED');

    // Test case 4: maxSubarraySum([4, 2, 1, 6, 2], 4) should return 13
    assert.strictEqual(maxSubarraySum([4, 2, 1, 6, 2], 4), 13);
    console.log('Test case 4 PASSED');

    // Test case 5: maxSubarraySum([], 4) should return null
    assert.strictEqual(maxSubarraySum([], 4), null);
    console.log('Test case 5 PASSED');

} catch (error) {
    console.log('Test case FAILED:', error.message);
}
