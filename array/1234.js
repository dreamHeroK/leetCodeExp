var balancedString = function (s) {
  let map = { Q: 0, W: 0, E: 0, R: 0 };
  for (let i = 0; i < s.length; i++) {
    map[s[i]]++;
  }
  let m = s.length / 4;
  if (map.Q === m && map.W === m && map.E === m && map.R === m) {
    return 0;
  }
  let ans = s.length,
    left = 0;
  for (let i = 0; i < s.length; i++) {
    map[s[i]]--;
    while (map.Q <= m && map.W <= m && map.E <= m && map.R <= m) {
      ans = Math.min(ans, i - left + 1);
      map[s[left]]++;
      left++;
    }
  }
  return ans
};
