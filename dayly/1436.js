// 给你一份旅游线路图，该线路图中的旅行线路用数组 paths 表示，
// 其中 paths[i] = [cityAi, cityBi] 表示该线路将会从 cityAi 直接前往 cityBi 。
// 请你找出这次旅行的终点站，即没有任何可以通往其他城市的线路的城市。

// 题目数据保证线路图会形成一条不存在循环的线路，因此恰有一个旅行终点站。

// 哈希表两次遍历呗 还说啥呢
var destCity = function (paths) {
    let map = {}
    let len = paths.length
    let end
    for (let i = 0; i < len; i++) {
        map[paths[i][0]] = paths[i][1]
    }
    for (let i = 0; i < len; i++) {
        if (!map[paths[i][1]]) {
            end = paths[i][1]
        }
    }
    return end
};