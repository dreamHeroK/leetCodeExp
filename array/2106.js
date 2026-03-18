var maxTotalFruits = function (fruits, startPos, k) {
  let res = 0,
    left = 0,
    sum = 0;
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i][0] - startPos < -k) {
      left++;
      continue;
    }
    if (fruits[i][0] - startPos > k) {
      return res;
    }
    sum += fruits[i][1];
    while (
      fruits[i][0] > startPos &&
      startPos > fruits[left][0] &&
      (startPos - fruits[left][0]) * 2 >
        k - Math.abs(fruits[i][0] - startPos) &&
      (fruits[i][0] - startPos) * 2 > k - Math.abs(fruits[left][0] - startPos)
    ) {;
      sum -= fruits[left][1];
      left++;
    }
    res = Math.max(res, sum);
  }
  return res;
};

console.log(
  maxTotalFruits(
    [
      [0, 7],
      [7, 4],
      [9, 10],
      [12, 6],
      [14, 8],
      [16, 5],
      [17, 8],
      [19, 4],
      [20, 1],
      [21, 3],
      [24, 3],
      [25, 3],
      [26, 1],
      [28, 10],
      [30, 9],
      [31, 6],
      [32, 1],
      [37, 5],
      [40, 9],
    ],
    21,
    30
  )
);
