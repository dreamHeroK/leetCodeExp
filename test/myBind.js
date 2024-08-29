Function.prototype.myBind = function (context) {
    if (typeof this !== "function") {
        throw new Error('ee')
    }
    const args = [...arguments].slice(1),
        func = this
    return function Func() {
        return func.apply(this instanceof Func ? new func(...arguments) : context, args.concat(...arguments))
    }
}

function fn(...args) {
    console.log(this, args);
}
let obj = {
    myname: "张三"
}
const bindFn = fn.myBind(obj);
bindFn(1, 2) // this指向obj
fn(1, 2) // this指向window