var canChange = function (start, target) {
  let l1 = 0,
    l2 = 0;
  let move_ = 0;
  let moveR = 0;
  while (l2 < target.length) {
    if (target[l2] === start[l1]) {
       console.log(l1, l2, "index2");
      l1++;
      l2++;
    } else if (target[l2] === "L") {
      while (l1 < start.length && start[l1] === "_") {
        l1++;
        move_++;
      }
      if (start[l1] === "L") {
        l2++;
        l1++;
      } else {
        return false;
      }
    } else if (target[l2] === "_") {
      if (move_ > 0) {
        move_--;
        l2++;
      } else {
        while (l1 < start.length && start[l1] === "R") {
          l1++;
          moveR++;
        }
        if (start[l1] === "_") {
          l2++;
          l1++;
        } else {
          return false;
        }
        console.log(l1, l2, "index1");
      }
    } else {
      if (moveR > 0) {
        moveR--;
        l2++;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(canChange("_L__R__RL", "L_____RLR"));
