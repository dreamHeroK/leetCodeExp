var minimumRefill = function (plants, capacityA, capacityB) {
  let len = plants.length;
  let left = 0,
    right = len - 1,
    count = 0,
    lW = capacityA,
    rW = capacityB;
  while (left < right) {
    if (lW >= plants[left]) {
      lW -= plants[left];
    } else {
      lW = capacityA - plants[left];
      count++;
    }
    left++;
    if (rW >= plants[right]) {
      rW -= plants[right];
    } else {
      rW = capacityB - plants[right];
      count++;
    }
    right--;
  }
  if (left === right) {
    if (lW < plants[left] && rW < plants[left]) {
      count++;
    }
  }
  return count;
};
