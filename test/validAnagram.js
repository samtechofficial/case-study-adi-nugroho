const assert = require('assert');
const validAnagram = require('../validAnagram');

// Unit Test Cases
try {
    // Test case 1: validAnagram('', '') should return true
    assert.strictEqual(validAnagram('', ''), true);
    console.log('Test case 1 PASSED');

    // Test case 2: validAnagram('aaz', 'zza') should return false
    assert.strictEqual(validAnagram('aaz', 'zza'), false);
    console.log('Test case 2 PASSED');

    // Test case 3: validAnagram('anagram', 'nagaram') should return true
    assert.strictEqual(validAnagram('anagram', 'nagaram'), true);
    console.log('Test case 3 PASSED');

    // Test case 4: validAnagram('rat', 'car') should return false
    assert.strictEqual(validAnagram('rat', 'car'), false);
    console.log('Test case 4 PASSED');

    // Test case 5: validAnagram('awesome', 'awesom') should return false
    assert.strictEqual(validAnagram('awesome', 'awesom'), false);
    console.log('Test case 5 PASSED');

    // Test case 6: validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') should return false
    assert.strictEqual(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'), false);
    console.log('Test case 6 PASSED');

    // Test case 7: validAnagram('qwerty', 'qeywrt') should return true
    assert.strictEqual(validAnagram('qwerty', 'qeywrt'), true);
    console.log('Test case 7 PASSED');

    // Test case 8: validAnagram('texttwisttime', 'timetwisttext') should return true
    assert.strictEqual(validAnagram('texttwisttime', 'timetwisttext'), true);
    console.log('Test case 8 PASSED');

} catch (error) {
    console.log('Test case FAILED:', error.message);
}