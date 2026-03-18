var reversePrefix = function(s, k) {
    let arr=s.split('');
    let left=0,right=k-1;
    while(left<right){
        let tmp=arr[left];
        arr[left]=arr[right];
        arr[right]=tmp;
        left++;
        right--;
    }
    return arr.join('');
};