var takeCharacters = function (s, k) {
  let map = { a: 0, b: 0, c: 0 },
    len = s.length;
  for (let i = 0; i < len; i++) {
    map[s[i]]++;
  }
  for (let key in map) {
    if (map[key] < k) {
      return -1;
    }
  }
  let left = 0,
    curMap = { a: 0, b: 0, c: 0 },
    max = 0;
  for (let i = 0; i < len; i++) {
    curMap[s[i]]++;
    while (map[s[i]] - curMap[s[i]] < k) {
      curMap[s[left]]--;
      left++;
    }
    max = Math.max(i - left + 1, max);
  }
  return len - max;
};
