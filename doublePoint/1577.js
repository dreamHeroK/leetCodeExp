/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let len1 = nums1.length,
    len2 = nums2.length,
    res = 0;
  for (let i = 0; i < len1; i++) {
    let left = 0,
      right = len2 - 1;
    while (left < right) {
      if (nums1[i] ** 2 === nums2[left] * nums2[right]) {
        if (nums2[right] === nums2[left]) {
            res += ((right - left + 1) * (right - left)) / 2;
            break;
          } else {
            let s1 = 0,
              s2 = 0,
              cl = nums2[left],
              c2 = nums2[right];
            while (nums2[left] === cl) {
              left++;
              s1++;
            }
            while (nums2[right] === c2) {
              right--;
              s2++;
            }
            res += s1 * s2;
          }
      } else if (nums1[i] ** 2 > nums2[left] * nums2[right]) {
        left++;
      } else {
        right--;
      }
    }
  }

  for (let i = 0; i < len2; i++) {
    let left = 0,
      right = len1 - 1;
    while (left < right) {
      if (nums2[i] ** 2 === nums1[left] * nums1[right]) {
        if (nums1[right] === nums1[left]) {
          res += ((right - left + 1) * (right - left)) / 2;
          break;
        } else {
          let s1 = 0,
            s2 = 0,
            cl = nums1[left],
            c2 = nums1[right];
          while (nums1[left] === cl) {
            left++;
            s1++;
          }
          while (nums1[right] === c2) {
            right--;
            s2++;
          }
          res += s1 * s2;
        }
      } else if (nums2[i] ** 2 > nums1[left] * nums1[right]) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};

console.log(numTriplets([1, 1], [1, 1, 1]));
