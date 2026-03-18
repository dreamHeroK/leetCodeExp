var numberOfAlternatingGroups = function (colors, k) {
  let arr = colors.concat(colors.slice(0, k - 1));
  let str = "",
    sum = 0;
  let match1 = "",
    match2 = "",
    prevIs = false;
  for (let i = 0; i < k; i++) {
    if (i % 2 === 0) {
      match1 += "1";
      match2 += "0";
    } else {
      match1 += "0";
      match2 += "1";
    }
  }
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    if (str.length < k) {
      continue;
    }
    if (prevIs) {
      if (arr[i] !== arr[i - 1]) {
        sum += 1;
      } else {
        prevIs = false;
      }
    } else if (str === match1 || str === match2) {
      sum += 1;
      prevIs = true;
    }
    str = str.slice(1);
  }
  return sum;
};

console.log(numberOfAlternatingGroups([1, 1, 0, 1], 4));
