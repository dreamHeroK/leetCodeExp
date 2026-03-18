var finalPositionOfSnake = function (n, commands) {
  const moveMap = {
    UP: -n,
    RIGHT: 1,
    DOWN: n,
    LEFT: -1,
  };
  let res = 0;
  for (let i = 0; i < commands.length; i++) {
    res += moveMap[commands[i]];
  }
  return res;
};

console.log(finalPositionOfSnake(3,["DOWN","RIGHT","UP"]))