var numberOfSubstrings = function (s, k) {
  let map = new Array(26).fill(0);
  let res = 0,
    left = 0;
  for (let i = 0; i < s.length; i++) {
    map[s[i].codePointAt() - "a".codePointAt()]++;
    while (map[s[i].codePointAt() - "a".codePointAt()] >= k) {
      map[s[left].codePointAt() - "a".codePointAt()]--;
      left++;
    }
    res += left;
  }
  return res;
};
