var maxVowels = function (s, k) {
  let oMap = ["a", "e", "i", "o", "u"];
  let len = 0,
    maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    if (oMap.includes(s[i])) {
      len++;
    }
    if (i < k) {
      continue;
    }
    if (oMap.includes(s[i - k])) {
      len--;
    }
    maxLen = Math.max(maxLen, len);
  }
  return maxLen;
};

console.log(maxVowels("abciiidef", 3));
