function clone(parent, child) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function parent() {
    this.name = "parent";
    this.age = 444;
}

parent.prototype.say = function () {
    console.log(this.name);
}

function child() {
    parent.call(this);
    this.name = 'child'
}

clone(parent, child)

let person = new child()
person.say() // child