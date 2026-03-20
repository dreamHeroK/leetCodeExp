var flipAndInvertImage = function (image) {
    let i = 0;
    while (i < image.length) {
        let left = 0, right = image.length - 1;
        while (left < right) {
            let tmp = image[i][left]
            image[i][left] = (image[i][right] === 0 ? 1 : 0);
            image[i][right] = (tmp === 0 ? 1 : 0);
            left++
            right--
        }
        if (left === right) {
            image[i][left] = (image[i][left] === 0 ? 1 : 0);
        }
        i++
    }
    return image
};

let image = [[1, 1, 0], [1, 0, 1], [0, 0, 0]]
console.log(flipAndInvertImage(image));