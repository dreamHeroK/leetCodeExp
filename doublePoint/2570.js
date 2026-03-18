var mergeArrays = function (nums1, nums2) {
  let left = 0,
    right = 0,
    lenLeft = nums1.length,
    lenRight = nums2.length,
    res = [];
  while (left < lenLeft || right < lenRight) {
    if (left >= lenLeft) {
      res.push(nums2[right++]);
      continue;
    } else if (right >= lenRight) {
      res.push(nums1[left++]);
      continue;
    }
    if (nums1[left][0] === nums2[right][0]) {
      res.push([nums1[left][0], nums1[left++][1] + nums2[right++][1]]);
    } else if (nums1[left][0] < nums2[right][0]) {
      res.push(nums1[left++]);
    } else {
      res.push(nums2[right++]);
    }
  }
  return res;
};
