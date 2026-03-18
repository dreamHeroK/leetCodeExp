var maxDistance = function (nums1, nums2) {
  let len1 = nums1.length,
    len2 = nums2.length;
  let left = 0,
    start = 0;
  res = 0;
  while (left < len1) {
    if (start < left) {
      start = left;
    }
    while (nums2[start] >= nums1[left] && start < len2) {
      start++;
    }
    res = Math.max(res, start - left - 1);
    if (start === len2) {
      return res;
    }
    left++;
  }
  return res;
};
