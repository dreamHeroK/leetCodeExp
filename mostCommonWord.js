var mostCommonWord = function (paragraph, banned) {
    let arr = paragraph.toLowerCase().replace(/[^a-z\s]\s*/g, ' ').split(' ')
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (!banned.includes(arr[i])) {
            if (map.has(arr[i])) {
                map.set(arr[i], map.get(arr[i]) + 1)
            } else {
                map.set(arr[i], 1)
            }
        }
    }
    let iteratorl = map[Symbol.iterator]()
    let max = 0
    let maxKey = ''
    for (let item of iteratorl) {
        if (max < item[1]) {
            max = item[1]
            maxKey = item[0]
        }
    }
    return maxKey
};