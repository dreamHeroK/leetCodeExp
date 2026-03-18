var maxFreq = function (s, maxLetters, minSize, maxSize) {
  let map = new Map(),
    strMap = new Map(),
    str = "";
  for (let i = 0; i < s.length; i++) {
    let curCode=s[i]
    str +=curCode;
    if (map.has(curCode)) {
      map.set(curCode, map.get(curCode) + 1);
    } else {
      map.set(curCode, 1);
    }
    if (i < minSize - 1) {
      continue;
    }
    if (map.size <= maxLetters) {
      if (strMap.has(str)) {
        strMap.set(str, strMap.get(str) + 1);
      } else {
        strMap.set(str, 1);
      }
    }
    str = str.slice(1);
    let prevCode=s[i - minSize + 1]
    let mapPrev=map.get(prevCode)
    if (mapPrev > 1) {
      map.set(prevCode,mapPrev - 1);
    } else {
      map.delete(prevCode);
    }
  }
  let maxNum = 0;
  strMap.forEach((v) => {
    maxNum = Math.max(maxNum, v);
  });
  return maxNum;
};

console.log(maxFreq("aaaa", 1, 3, 3));
