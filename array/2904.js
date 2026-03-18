var shortestBeautifulSubstring = function (s, k) {
  let left = 0,
    str = "",
    res = "",
    sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      sum++;
    }
    str += s[i];
    if (sum < k) {
      continue;
    }
    while (sum >= k) {
      if (sum === k) {
        res =
          res === ""
            ? str
            : str.length < res.length
            ? str
            : str.length > res.length
            ? res
            : str < res
            ? res
            : str;
      }
      if (s[left] === "1") {
        sum--;
      }
      str = str.slice(1);
      left++;
    }
  }
  return res;
};

console.log(shortestBeautifulSubstring("001110101101101111", 10));
