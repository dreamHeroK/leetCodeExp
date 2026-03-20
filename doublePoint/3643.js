var reverseSubmatrix = function (grid, x, y, k) {
    let right = x + k - 1;
    let yLeft=y
    while(x<right){
        while(yLeft<y+k){
            let tmp=grid[x][yLeft]
            grid[x][yLeft]=grid[right][yLeft]
            grid[right][yLeft]=tmp;
            yLeft++
        }
        yLeft=y;
        x++;
        right--
    }
    return grid;
};

let grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], x = 1, y = 0, k = 3
console.log(reverseSubmatrix(grid,x,y,k));