var lengthOfLongestSubstring = function (s) {
  let res = 0,
    len = s.length;
  for (let i = 0; i < len; i++) {
    let right = i + 1;
    let map = new Map();
    map.set(s[i], 1);
    while (!map.has(s[right]) && right < len) {
      map.set(s[right], 1);
      right++;
    }
    res = Math.max(res, right - i);
  }
  return res;
};

var lengthOfLongestSubstring = function (s) {
  let left = 0,
    res = 0,
    window = new Set();
  len = s.length;
  for (let right = 0; right < len; i++) {
    while (window.has(s[right])) {
      window.delete(s[left]);
      left++;
    }
    window.add(s[right]);
    res = Math.max(res, right - left + 1);
  }
  return res;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("xxzqi"));
console.log(lengthOfLongestSubstring("ooybtm"));
