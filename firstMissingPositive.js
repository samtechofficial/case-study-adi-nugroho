/*
Given an unsorted integer array nums, find the smallest missing positive integer.
Input: An unsorted array of integers nums[] which may contain both positive and negative numbers.
Output: Return the smallest missing positive integer.

Example:
Input: [1, 2, 0]
Output: 3
Explanation: The numbers 1 and 2 are present, so the smallest missing positive integer is 3.

Input: [3, 4, -1, 1]
Output: 2
Explanation: The smallest missing positive integer is 2.

Input: [7, 8, 9, 11, 12]
Output: 1
Explanation: The smallest missing positive integer is 1 since none of the positive integers starting from 1 are present.
*/


function firstMissingPositive(nums) {
  // Write your code here
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // If all positive integers from 1 to n are present, return n + 1
  return n + 1;
}


module.exports = firstMissingPositive;