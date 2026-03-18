var diagonalPrime = function (nums) {
  let len = nums.length;
  let arr = nums
    .map((v, index) =>
      v.filter((item, i) => (i === index || i === len - index - 1) && item > 1)
    )
    .flat();
  arr.sort((a, b) => b - a);
  let res = 0;
  for (const num of arr) {
    let isZ = true;
    for (let n = 2; n < parseInt(num / 2); n++) {
      if (num % n === 0) {
        isZ = false;
        break;
      }
    }
    if (isZ) {
      return num;
    }
  }
  return res;
};
console.log(
  diagonalPrime([
    [1, 2, 3],
    [5, 6, 7],
    [9, 10, 11],
  ])
);
