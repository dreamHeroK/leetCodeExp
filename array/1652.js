var decrypt = function (code, k) {
  if (k === 0) {
    return new Array(code.length).fill(0);
  }
  let len = code.length;
  let start, end, point;
  if (k < 0) {
    start = k + len;
    end = 2 * len - 1;
    point = len - 1;
  } else {
    start = 1;
    end = len + k;
    point = k;
  }
  let newCode = code.concat(code);
  let res = [];
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += newCode[i];
    if (i < point) {
      continue;
    }
    res.push(sum);
    sum -= newCode[k > 0 ? i - k + 1 : i + k + 1];
  }
  return res;
};

console.log(decrypt([5, 7, 1, 4], 3));
