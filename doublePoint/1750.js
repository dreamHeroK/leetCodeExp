var minimumLength = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left < right && s[left] === s[right]) {
    let tmp = s[right];
    while (left <= right && s[left] === tmp) {
      left++;
    }
    while (left <= right && s[right] === tmp) {
      right--;
    }
  }
  return right - left + 1;
};

console.log(minimumLength("abbbbbbbbbbbbbbbbbbba"));
