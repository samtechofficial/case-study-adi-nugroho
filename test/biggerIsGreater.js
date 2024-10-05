const assert = require('assert');
const biggerIsGreater = require('../biggerIsGreater');

// Unit Test Cases
try {
    // Test case 1: Input: "abcd" should return "abdc"
    assert.strictEqual(biggerIsGreater("abcd"), "abdc");
    console.log('Test case 1 PASSED');

    // Test case 2: Input: "abdc" should return "acbd"
    assert.strictEqual(biggerIsGreater("abdc"), "acbd");
    console.log('Test case 2 PASSED');

    // Test case 3: Input: "dcba" should return "no answer"
    assert.strictEqual(biggerIsGreater("dcba"), "no answer");
    console.log('Test case 3 PASSED');

    // Test case 4: Input: "a" should return "no answer"
    assert.strictEqual(biggerIsGreater("a"), "no answer");
    console.log('Test case 4 PASSED');

    // Test case 5: Input: "aaa" should return "no answer"
    assert.strictEqual(biggerIsGreater("aaa"), "no answer");
    console.log('Test case 5 PASSED');

    // Test case 6: Input: "ab" should return "ba"
    assert.strictEqual(biggerIsGreater("ab"), "ba");
    console.log('Test case 6 PASSED');

    // Test case 7: Input: "aab" should return "aba"
    assert.strictEqual(biggerIsGreater("aab"), "aba");
    console.log('Test case 7 PASSED');

} catch (error) {
    console.log('Test case FAILED:', error.message);
}
