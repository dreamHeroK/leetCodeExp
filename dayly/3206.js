var numberOfAlternatingGroups = function (colors, k) {
  let arr = colors.slice(colors.length - 2).concat(colors);
  let str = "",
    sum = 0;
  let matchArr = [];
  let match = new Array(k);
  matchArr.push(
    match
      .map((item, index) => {
        index % 2 == 0 ? 1 : 0;
      })
      .join(""),
    match
      .map((item, index) => {
        index % 2 == 0 ? 0 : 1;
      })
      .join("")
  );
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    if (str.length < k) {
      continue;
    }
    if (str === matchArr[0] || str === matchArr[1]) {
      sum += 1;
    }
    str = str.slice(1);
  }
  return sum;
};

console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1]));
