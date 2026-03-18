// var longestEqualSubarray = function (nums, k) {
//   let map = {},
//     left = 0,
//     res = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (!map[nums[i]]) {
//       map[nums[i]] = 1;
//     } else {
//       map[nums[i]]++;
//     }
//     let maxKey = nums[i];
//     for (let key in map) {
//       maxKey = map[key] > map[maxKey] ? key : maxKey;
//     }
//     while (k < i - left + 1 - map[maxKey] && Object.keys(map).length > 1) {
//       map[nums[left]]--;
//       for (let key in map) {
//         maxKey = map[key] > map[maxKey] ? key : maxKey;
//       }
//       left++;
//     }
//     res = Math.max(res, map[maxKey]);
//   }
//   return res;
// };

const longestEqualSubarray = (nums, k) => {
  let len = nums.length;
  let posMap = Array.from({ length: len + 1 }, () => []);
  for (let i = 0; i < len; i++) {
    let v = nums[i];
    posMap[v].push(i - posMap[v].length);
  }
  let res = 0;
  for (const pos of posMap) {
    if (pos.length <= res) {
      continue;
    }
    let left = 0;
    for (let i = 0; i < pos.length; i++) {
      while (pos[i] - pos[left] > k) {
        left++;
      }
      res = Math.max(res, i - left + 1);
    }
  }
  return res;
};
console.log(longestEqualSubarray([1, 5, 5, 7, 7, 7, 4], 0));
