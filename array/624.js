var maxDistance = function (arrays) {
  // 维护一个最大值
  let res = 0,
    max = -Infinity,
    min = Infinity;
  for (const num of arrays) {
    res = Math.max(res, max - num[0], num[num.length - 1] - min);
    max = Math.max(num[num.length - 1], max);
    min = Math.min(num[0], min);
  }
  return res;
};

console.log(maxDistance([[1], [2]]));
