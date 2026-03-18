var stableMountains = function (height, threshold) {
  let list = [];
  for (let i = 0; i < height.length - 1; i++) {
    if (height[i] > threshold) {
      list.push(i + 1);
    }
  }
  return list;
};
