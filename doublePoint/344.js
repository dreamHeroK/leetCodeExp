var reverseString = function (s) {
  let len = s.length,
    right = len - 1,
    left = 0,
    tmp;
  while (left < right) {
    tmp = s[right];
    s[right] = s[left];
    s[left] = tmp;
    left++;
    right--;
  }
  return s;
};
