/* Write a function, FindIntersection, that reads an array of strings which will contain two elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a string of numbers that occur in both elements of the input array in sorted order. If there is no intersection, return the string “false”.

For example: if the input array is [“1, 3, 4, 7, 15”, “1, 2, 4, 15, 21”] the output string should be “1, 4, 15” because those numbers appear in both strings (they are the common elements). The array given will not be empty, and each string inside the array will be of numbers sorted in ascending order and may contain negative numbers.

Another example: if the input array is [“1, 3, 9, 10, 17, 18”, “1, 4, 9, 10”] the output string should be “1, 9, 10” because those numbers appear in both of the strings.
*/

function FindIntersection(strArr) {
  const [s1, s2] = strArr.map(a => new Set(a.split(", ")));
  const intersection = [...s1].filter(x => s2.has(x));
  return intersection.length === 0 ? "false" : intersection.join(",");
}