var longestSemiRepetitiveSubstring = function (s) {
  if (s.length === 1) {
    return 1;
  }
  let left = 0,
    res = 0,
    count = 0,
    prevIndex = 0;
  for (let right = 1; right < s.length; right++) {
    if (s[right] === s[right - 1]) {
      count++;
      if (count > 1) {
        left = prevIndex;
        count--;
      }
      prevIndex = right;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};

console.log(longestSemiRepetitiveSubstring("0001"));
