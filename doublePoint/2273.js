var removeAnagrams = function (words) {
  let right = 1,
    left = 0,
    map = [];
  while (right < words.length) {
    let len = words[left].length;
    if (words[right].length !== len) {
      words[++left] = words[right];
      map[left] = null;
      right++;
      continue;
    }
    if (!map[left]) {
      map[left] = new Array(26).fill(0);
      for (let i = 0; i < len; i++) {
        map[left][words[left][i].charCodeAt() - 97]++;
      }
    }
    let isSame = true;
    map[right] = new Array(26).fill(0);
    for (let i = 0; i < len; i++) {
      map[right][words[right][i].charCodeAt() - 97]++;
    }
    for (let i = 0; i < 26; i++) {
      if (map[left][i] !== map[right][i]) {
        isSame = false;
      }
    }
    if (!isSame) {
      words[++left] = words[right];
      map[left] = null;
    }
    right++;
  }
  return words.slice(0, left + 1);
};

// 看了题解发现自己搞复杂了，可以用排序再比对

var removeAnagrams = function (words) {
  let k = 0,
    base = "";
  for (const word of words) {
    let str = word.split("").sort().join();
    if (str !== base) {
      base = str;
      words[k++] = word;
    }
  }
  words.length = k;
  return words;
};
let words = ["abba", "baba", "bbaa", "cd", "cd"];
console.log(removeAnagrams(words));
