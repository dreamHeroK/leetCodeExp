/*
 * @lc app=leetcode.cn id=13 lang=java
 *
 * [13] 罗马数字转整数
 */


// @lc code=start
class Solution {
    public int romanToInt(String s) {
        int[] map = new int[256];
        map['I'] = 1;
        map['V'] = 5;
        map['X'] = 10;
        map['L'] = 50;
        map['C'] = 100;
        map['D'] = 500;
        map['M'] = 1000;

        int res = 0;

        for (int i = 0; i < s.length(); i++) {
            int cur = map[s.charAt(i)];
            if (i < s.length() - 1 && map[s.charAt(i + 1)] > cur) {
                res -= cur;
            } else {
                res += cur;
            }
        }
        return res;
    }
}
// @lc code=end
