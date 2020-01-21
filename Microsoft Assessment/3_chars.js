/* Write a function solution that, given a string S of N lowercase English letters, returns a string with no instances of three identical consecutive letters, obtained from S by deleting the minimum possible number of letters.

Examples:
Given S = “eedaaad” , the function should return “eedaad” . One occurrence of letter a is deleted.
Given S = “xxxtxxx” , the function should return “xxtxx” . Note that letter x can occur more than three times in the returned string, if the occurrences are not consecutive.
Given S = “uuuuxaaaaxuuu” , the function should return “uuxaaxuu”.

Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..200,000]
string S consists only of lowercase letters (a-z)
*/

const solution = (str) => {
  if (str.length <= 2) {
    return str;
  }

  let result = str.slice(0, 2);

  for (let i = 2; i < str.length; i++) {
    if (str[i] === str[i - 2] && str[i] === str[i - 1]) {
      continue;
    }
    result += str[i];
  }

  return result;
}