const reg = /^[AWSD][0-9]{1,2}$/g

const reg2=new RegExp(/^[AWSD][0-9]{1,2}$/g)
const match = reg2.test('S12d')
let s='11111111,3333'
console.log(s.split(',').length)
console.log(match)