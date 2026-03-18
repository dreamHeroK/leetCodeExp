var squareIsWhite = function (coordinates) {
  let map = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };
  let x = map[coordinates[0]],
    y = coordinates[1];
  if ((x % 2 === 1 && y % 2 === 1) || (x % 2 === 0 && y % 2 === 0)) {
    return false;
  }
  return true;
};
