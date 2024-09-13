const fourStrage = (num) => {
    return num * 4 * 3;
};
const fiveLink = (min, max) => {
    return (min + max) * 5;
};
const twoOrThree = (num, count) => {
    return num * count * 2;
};
const map = {
    0: 10,
    J: 11,
    Q: 12,
    K: 13,
};
const countMap = {};

    let card = line.split("").map((item) => {
        if (map[item]) {
            return map[item];
        } else {
            return Number(item);
        }
    });
    card.forEach((item) => {
        if (countMap[item]) {
            countMap[item]++;
        } else {
            countMap[item] = 0;
        }
    });

    let maxPoint = 0;
    for (let key in countMap) {
        if (countMap[key] === 4) {
            maxPoint += fourStrage(key);
        } else if (countMap[key] === 3 || countMap[key] === 2) {
            maxPoint += twoOrThree(key, countMap[key])
        } else {
            maxPoint += countMap[key]
        }
    }
console.log(maxPoint)