var maximumWhiteTiles = function (tiles, carpetLen) {
  tiles.sort((a, b) => a[0] - b[0]);
  let left = 0,
    right = 0,
    sum = 0,
    maxSum = 0;
  let len = tiles[tiles.length - 1][1];
  for (let i = 1; i <= len; i++) {
    if (i > tiles[right][1]) {
      right++;
    }
    if (i >= tiles[right][0] && i <= tiles[right][1]) {
      sum++;
    }
    if (i < carpetLen - 1) {
      continue;
    }
    maxSum = Math.max(sum, maxSum);
    if (i - carpetLen + 1 > tiles[left][1]) {
      left++;
    }
    if (
      i - carpetLen + 1 >= tiles[left][0] &&
      i - carpetLen + 1 <= tiles[left][1]
    ) {
      sum--;
    }
  }
  return carpetLen > len ? sum : maxSum;
};

const maximumWhiteTiles = (titles, carpetLen) => {
  titles.sort((a, b) => a[0] - b[0]);
  let left = 0,
    res = 0,
    cover = 0;
  for (const [tl, tr] of titles) {
    cover += tr - tl + 1;
    while (titles[left][1] < tr - carpetLen + 1) {
      cover -= titles[left][1] - titles[left][0] + 1;
      left++;
    }
    let uncover = Math.max(tr - carpetLen + 1 - titles[left][0], 0);
    res = Math.max(res, cover - uncover);
  }
  return res;
};
