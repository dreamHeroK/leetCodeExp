var checkTwoChessboards = function (coordinate1, coordinate2) {
  let list = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };
  let x = [coordinate1[1], list[coordinate1[0]]];
  let y = [coordinate2[1], list[coordinate2[0]]];
  if (x[0] % 2 === y[0] % 2 && x[1] % 2 === y[1] % 2) {
    return true;
  }
  if (x[0] % 2 !== y[0] % 2 && x[1] % 2 !== y[1] % 2) {
    return true;
  }
  return false;
};

console.log(checkTwoChessboards("h7", "c8"));
