var countBalls = function (lowLimit, highLimit) {
  let arr = new Array(9 + 9 + 9 + 9 + 9).fill(0);
  for (let i = lowLimit; i <= highLimit; i++) {
    let str = i + "";
    let sum = 0;
    for (const v of str) {
      sum += Number(v);
    }
    arr[sum-1]++;
  }
  return Math.max(...arr);
};

console.log(countBalls(1, 100000));
