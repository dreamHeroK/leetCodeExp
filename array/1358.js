var numberOfSubstrings = function (s) {
  let left = 0,
    res = 0,
    map = { a: 0, b: 0, c: 0 };
  for (let i = 0; i < s.length; i++) {
    map[s[i]]++;
    while (map.a >= 1 && map.b >= 1 && map.c >= 1) {
      map[s[left]]--;
      left++;
    }
    res += left;
  }
  return res;
};

console.log(numberOfSubstrings("abcabc"));
