var hasAllCodes = function (s, k) {
  let set = new Set();
  let str = "";
  for (let i = 0; i < s.length; i++) {
    str += s[i];
    if (i < k - 1) {
      continue;
    }
    set.add(str);
    str = str.slice(1);
  }
  if (set.size < Math.pow(2, k)) {
    return false;
  }
  return true;
};
