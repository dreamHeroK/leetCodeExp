var findTheDistanceValue = function (arr1, arr2, d) {
  let len1 = arr1.length,
    left = 0,
    res = 0;
  while (left < len1) {
    res += arr2.every((item) => Math.abs(item - arr1[left]) > d) ? 1 : 0;
    left++;
  }
  return res;
};

console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3));
