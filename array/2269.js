var divisorSubstrings = function (num, k) {
  let res = 0,
    curStr = "",
    str = num.toString();
  for (let i = 0; i < str.length; i++) {
    curStr += str[i];
    if (curStr.length < k) {
      continue;
    }
    if (num % Number(curStr) === 0 && curStr !== "0") {
      res++;
    }
    curStr = curStr.slice(1);
  }
  return res;
};

console.log(divisorSubstrings(10, 1));
