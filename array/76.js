var minWindow = function (s, t) {
  let map = new Array(128).fill(0);
  for (let i = 0; i < t.length; i++) {
    map[t[i].codePointAt(0)]++;
  }
  let left = 0,
    res = "",
    str = "";
  for (let i = 0; i < s.length; i++) {
    map[s[i].codePointAt(0)]--;
    str += s[i];
    while (check(map)) {
      res = res.length > str.length ? str : res === "" ? str : res;
      map[s[left].codePointAt(0)]++;
      left++;
      str = str.slice(1);
    }
  }
  return res;
};

function check(arr) {
  return arr.every((item) => item <= 0);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
