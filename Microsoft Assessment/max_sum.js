/* Write a function solution that, given an array A consisting of N integers, returns the maximum sum of two numbers whose digits add up to an equal sum. If there are no two numbers whose digits have an equal sum, the function should return -1.

Examples:
Given A = [51, 71, 17, 42], the function should return 93. There are two pairs of numbers whose digits add up to an equal sum: (51, 42) and (17, 71). The first pair sums up to 93.
Given A = [42, 33, 60], the function should return 102. The digits of all the numbers in A add up to the same sum, and choosing to add 42 and 60 gives the result 102.
Given A = [51, 32, 43], the function should return -1, since all numbers in A have digits that add up to different, unique sums.

Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..200,000]
each element of array A is an integer within the range [1..1,000,000,000]
*/

class Solution {

  getDigitSum(num) {
    let res = 0;
    while (num >= 1) {
      res += Math.floor(num % 10);
      num /= 10;
    }
    return res;
  }

  maxSum(A) {
    let n = A.length;

    if (A === null || n <= 1) {
      return -1;
    }

    let sumMap = {};
    let res = -1;

    for (let num of A) {
      let digitSum = this.getDigitSum(num);

      if (!sumMap.hasOwnProperty(digitSum)) {
        sumMap[digitSum] = num;
      } else {
        res = Math.max(res, sumMap[digitSum] + num);

        sumMap[digitSum] = Math.max(sumMap[digitSum], num);
      }
    }
    return res;
  }
}

let solution = new Solution();
console.log(solution.maxSum([51, 71, 17, 42])); // expected: 93
console.log(solution.maxSum([42, 33, 60])); // expected: 102
console.log(solution.maxSum([51, 32, 43])); // expected: -1