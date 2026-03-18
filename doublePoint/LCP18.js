var breakfastNumber = function (staple, drinks, x) {
  staple.sort((a, b) => a - b);
  drinks.sort((a, b) => a - b);
  let left = 0,
    len1 = staple.length,
    len2 = drinks.length;
  right = len2 - 1;
  res = 0;
  while (left < len1) {
    if (staple[left] + drinks[right] <= x) {
      left++;
      res += right + 1;
      continue;
    }
    if (right === 0) {
      return res % 1000000007;
    } else {
      right--;
    }
  }
  return res % 1000000007;
};

console.log(breakfastNumber([2, 1, 1], [8, 9]));
