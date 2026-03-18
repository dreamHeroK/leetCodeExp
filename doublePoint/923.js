/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
  let len = arr.length,
    res = 0;
  arr.sort((a, b) => a - b);
  const MOD = 1000000007;
  for (let i = 0; i < len - 2; i++) {
    let mid = i + 1,
      right = len - 1;
    while (mid < right) {
      if (arr[i] + arr[mid] + arr[right] === target) {
        if (arr[right] === arr[mid]) {
          res += ((right - mid + 1) * (right - mid)) / 2;
          break;
        } else {
          let sm = 0,
            sr = 0,
            tm = arr[mid],
            tr = arr[right];
          while (arr[mid] === tm) {
            sm++;
            mid++;
          }
          while (arr[right] === tr) {
            sr++;
            right--;
          }
          res += sm * sr;
        }
      } else if (arr[i] + arr[mid] + arr[right] > target) {
        right--;
      } else {
        mid++;
      }
    }
  }
  return res % MOD;
};

