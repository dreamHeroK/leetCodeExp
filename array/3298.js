/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var validSubstringCount = function (word1, word2) {
  let left = 0,
    res = 0,
    diff = new Array(26).fill(0);
  len = word2.length;
  for (const w of word2) {
    diff[w.codePointAt() - "a".codePointAt()]++;
  }
  let less = 0;
  for (const b of diff) {
    if (b > 0) {
      less++;
    }
  }
  for (const c of word1) {
    const i = c.codePointAt() - "a".codePointAt();
    diff[i]--;
    if (diff[i] === 0) {
      less--;
    }
    while (less === 0) {
      const leftI = word1[left].codePointAt() - "a".codePointAt();
      left++;
      if (diff[leftI] === 0) {
        less++;
      }
      diff[leftI]++;
    }
    res += left;
  }
  return res;
};

console.log(validSubstringCount("eeddeeded", "dde"));
