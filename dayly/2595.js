var evenOddBit = function (n) {
  let res = [0, 0];
  time = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      res[time % 2]++;
      n--;
    }
    time++;
    n /= 2;
  }
  return res;
};

console.log(evenOddBit(50))