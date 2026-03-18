var maxScore = function (cardPoints, k) {
  let sum = 0,
    len = cardPoints.length,
    maxSum = 0;
  let newArr = [...cardPoints.slice(len - k), ...cardPoints.slice(0, k + 1)];
  for (let i = 0; i < 2 * k; i++) {
    sum += newArr[i];
    if (i < k - 1) {
      continue;
    }
    maxSum = Math.max(maxSum, sum);
    sum -= newArr[i - k + 1];
  }
  return maxSum;
};

console.log(maxScore([1,100,1], 1));
