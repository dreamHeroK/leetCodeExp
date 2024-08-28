let person = {
    name: "张三"
};


let proxy = new Proxy(person, {
    get: (target, propKey) => {
        return Reflect.get(target, propKey)
    }
})

console.log(proxy.name)

function createArray(...elements) {
    let handler = {
        get(target, propKey, receiver) {
            let index = Number(propKey);
            if (index < 0) {
                propKey = String(target.length + index);
            }
            return Reflect.get(target, propKey, receiver);
        }
    };

    let target = [...elements];
    return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
console.log(arr[-2])