var maxCoins = function (piles) {
  piles.sort((a, b) => a - b);
  let left = 0,
    right = piles.length - 1,
    res = 0;
  while (left < right) {
    res += piles[--right];
    left++;
    right--;
  }
  return res;
};

console.log(maxCoins([2, 4, 1, 2, 7, 8]));
