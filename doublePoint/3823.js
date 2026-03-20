/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function (s) {
    let arr = s.split("");
    let l1 = 0, l2 = 0, r1 = arr.length - 1; r2 = arr.length - 1;
    let reg = /[a-z]/;
    while (l1 < r1) {
        if (reg.test(arr[l1])) {
            if (reg.test(arr[r1])) {
                let tmp = arr[l1];
                arr[l1] = arr[r1];
                arr[r1] = tmp;
                l1++;
                r1--;
            } else {
                r1--
            }
        } else {
            l1++
        }
    }
    while (l2 < r2) {
        if (!reg.test(arr[l2])) {
            if (!reg.test(arr[r2])) {
                let tmp = arr[l2];
                arr[l2] = arr[r2];
                arr[r2] = tmp;
                l2++
                r2--
            } else {
                r2--
            }
        } else {
            l2++
        }
    }
    return arr.join('');
};

let s= ")ebc#da@f("
console.log(reverseByType(s));