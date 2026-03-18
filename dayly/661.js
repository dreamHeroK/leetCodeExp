// 661. 图片平滑器
// 图像平滑器 是大小为 3 x 3 的过滤器，用于对图像的每个单元格平滑处理，平滑处理后单元格的值为该单元格的平均灰度。

// 每个单元格的  平均灰度 定义为：该单元格自身及其周围的 8 个单元格的平均值，结果需向下取整。（即，需要计算蓝色平滑器中 9 个单元格的平均值）。

// 如果一个单元格周围存在单元格缺失的情况，则计算平均灰度时不考虑缺失的单元格（即，需要计算红色平滑器中 4 个单元格的平均值）。

var imageSmoother = function (img) {
  let m = img.length;
  let n = img[0].length;
  let res = [];
  for (let i = 0; i < m; i++) {
    let iArr = [];
    for (let j = 0; j < n; j++) {
      let hasTop = i - 1 >= 0;
      let hasDown = i + 1 < m;
      let hasLeft = j - 1 >= 0;
      let hasRight = j + 1 < n;

      let res = Math.floor(
        (img[i][j] +
          (hasTop ? img[i - 1][j] : 0) +
          (hasDown ? img[i + 1][j] : 0) +
          (hasLeft ? img[i][j - 1] : 0) +
          (hasRight ? img[i][j + 1] : 0) +
          (hasTop && hasLeft ? img[i - 1][j - 1] : 0) +
          (hasTop && hasRight ? img[i - 1][j + 1] : 0) +
          (hasDown && hasLeft ? img[i + 1][j - 1] : 0) +
          (hasDown && hasRight ? img[i + 1][j + 1] : 0)) /
          (1 +
            (hasTop ? 1 : 0) +
            (hasLeft ? 1 : 0) +
            (hasDown ? 1 : 0) +
            (hasRight ? 1 : 0) +
            (hasTop && hasLeft ? 1 : 0) +
            (hasTop && hasRight ? 1 : 0) +
            (hasDown && hasLeft ? 1 : 0) +
            (hasDown && hasRight ? 1 : 0))
      );
      iArr.push(res);
    }
    res.push(iArr);
  }
  return res;
};

console.log(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100],
  ])
);
