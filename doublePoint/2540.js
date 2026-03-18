var getCommon = function (nums1, nums2) {
  let left = 0,
    right = 0,
    lenLeft = nums1.length,
    lenRight = nums2.length;
  while (left < lenLeft && right < lenRight) {
    if (nums1[left] < nums2[right]) {
      left++;
    } else if (nums1[left] > nums2[right]) {
      right++;
    } else {
      return nums1[left];
    }
  }
  return -1;
};
