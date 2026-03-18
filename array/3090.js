var maximumLengthSubstring = function (s) {
  let left = 0,
    map = new Map(),
    res = 0;
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      map.set(s[right], map.get(s[right]) + 1);
    } else {
      map.set(s[right], 1);
    }
    while (map.get(s[right]) > 2) {
      if (map.get(s[left]) > 1) {
        map.set(s[left], map.get(s[left]) - 1);
      } else {
        map.delete(s[left]);
      }
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res
};
console.log(maximumLengthSubstring("bcbbbcba"))
