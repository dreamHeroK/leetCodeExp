var minimumRecolors = function (blocks, k) {
  let bCount = 0,
    maxBCount = 0;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] === "B") {
      bCount++;
    }
    if (i < k - 1) {
      continue;
    }
    maxBCount = Math.max(maxBCount, bCount);
    if (blocks[i - k + 1] === "B") {
      bCount--;
    }
  }
  return k - maxBCount;
};

console.log(minimumRecolors("WBBWWBBWBW", 7));
