var addSpaces = function (s, spaces) {
  let n = s.length,
    m = spaces.length,
    i = m + n - 1,
    arr = s.split("");
  m--, n--;
  while (n >= 0 && m >= 0) {
    if (n === spaces[m] - 1) {
      m--;
      arr[i--] = " ";
    }
    arr[i] = arr[n];

    n--, i--;
  }
  if (m >= 0) {
    arr[0] = " ";
  }
  return arr.join("");
};

console.log(addSpaces("p", [0]));
