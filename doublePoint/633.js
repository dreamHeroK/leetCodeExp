var judgeSquareSum = function (c) {
  let left = 0,
    right = parseInt(c ** 0.5);
  while (left < right) {
    if (left ** 2 + right ** 2 == c) {
      return true;
    }
    if (left ** 2 + right ** 2 > c) {
      right--;
    } else {
      left++;
    }
  }
  if (left === right && left ** 2 + right ** 2 == c) {
    return true;
  }
  return false;
};
