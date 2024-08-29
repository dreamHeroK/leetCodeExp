function newObj(obj, ...args) {
    let newObj = {}
    newObj.__proto__ = obj.protoType
    let res = obj.apply(this, args)
    return res.instanceOf(Object) ? res : newObj
}