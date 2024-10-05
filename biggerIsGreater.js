/*
 Lexicographical order is often known as alphabetical order when dealing with strings. A string is greater than another string if it comes later in a lexicographically sorted list. [Kuya]

Given a word, create a new word by swapping some or all of its characters. This new word must meet two criteria:

It must be greater than the original word
It must be the smallest word that meets the first condition
Example:
- abcd

The next largest word is abdc.

Complete the function biggerIsGreater below to create and return the new string meeting the criteria. If it is not possible, return no answer.
*/


function biggerIsGreater(word) {
    // Write your code here
    const arr = word.split('');
    const length = arr.length;

    let pivot = -1;
    for (let i = length - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            pivot = i;
            break;
        }
    }

    if (pivot === -1) {
        return 'no answer';
    }

    let successor = -1;
    for (let i = length - 1; i > pivot; i--) {
        if (arr[i] > arr[pivot]) {
            successor = i;
            break;
        }
    }

    [arr[pivot], arr[successor]] = [arr[successor], arr[pivot]];

    const newSuffix = arr.slice(pivot + 1).reverse();
    const result = arr.slice(0, pivot + 1).concat(newSuffix).join('');

    return result;
}

module.exports = biggerIsGreater;
