var equalSubstring = function(s, t, maxCost) {
    let left=0,res=0,curCost=0;
    for(let right=0;right<s.length;right++){
        curCost+=Math.abs(t[right].charCodeAt(0)-s[right].charCodeAt(0))
        while(curCost>maxCost){
            curCost-=Math.abs(t[left].charCodeAt(0)-s[left].charCodeAt(0))
            left++
        }
        res=Math.max(res,right-left+1)
    }
    return res
};

console.log(equalSubstring("abcd","bcdf",3))