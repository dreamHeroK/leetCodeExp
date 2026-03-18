var isSubstringPresent = function (s) {
  let set = new Set(),
    len = s.length;
  window = "";
  for (let i = 0; i < s.length; i++) {
    window += s[i];
    if (i < 1) {
      continue;
    }
    set.add(window);
    window = window.slice(1);
  }
  window = "";
  for (let i = len - 1; i >= 0; i--) {
    window += s[i];
    if (i > len - 2) {
      continue;
    }
    if (set.has(window)) {
      return true;
    }
    window = window.slice(1);
  }
  return false;
};

console.log(isSubstringPresent("abcd"));
