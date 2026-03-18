var reversePrefix = function(word, ch) {
    let ind=word.indexOf(ch);
    if(ind===-1){
        return word;
    }
    let arr=word.split('');
    let left=0,right=ind;
    while(left<right){
        let tmp=arr[left];
        arr[left]=arr[right];
        arr[right]=tmp;
        left++;
        right--;
    }
    return arr.join('');
};