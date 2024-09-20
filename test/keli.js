function add(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c+d
            }
        }
    }
}

console.log(add(1)(2)(3)(4))