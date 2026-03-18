var findSpecialInteger = function (arr) {
  let time = parseInt(arr.length * 0.25),
    prev,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (prev === undefined) {
      prev = arr[i];
    }
    if (prev === arr[i]) {
      count++;
    } else {
      count = 1;
      prev = arr[i];
    }
    console.log(time, count, "22");
    if (count > time) {
      return arr[i];
    }
  }
};

console.log(
  findSpecialInteger([
    0, 0, 2, 2, 2, 4, 4, 4, 6, 6, 10, 10, 10, 10, 10, 12, 14, 16, 16,
  ])
);
