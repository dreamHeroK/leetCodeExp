var maxSatisfied = function (customers, grumpy, minutes) {
  let len = customers.length;
  let maxDiff = 0,
    diff = 0;
  total = 0;
  for (let i = 0; i < len; i++) {
    if (grumpy[i]) {
      diff += customers[i];
    } else {
      total += customers[i];
    }
    if (i < minutes - 1) {
      continue;
    }
    maxDiff = Math.max(maxDiff, diff);
    if (grumpy[i - minutes + 1]) {
      diff -= customers[i - minutes + 1];
    }
  }
  return total + maxDiff;
};

console.log(
  maxSatisfied([10,1,7], [0,0,0], 2)
);
