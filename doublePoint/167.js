/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// bad
// var twoSum = function (numbers, target) {
//   let rightMax = numbers.length;
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < rightMax; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i + 1, j + 1];
//       }
//       if (numbers[i] + numbers[j] > target) {
//         rightMax = j;
//       }
//     }
//   }
// };

const twoSum = (numbers, target) => {
  let right = numbers.length - 1,
    left = 0;
  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    }
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(twoSum([-10, -8, -2, 1, 2, 5, 6], 0));
