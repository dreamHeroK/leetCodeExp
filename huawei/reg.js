const reg = /^[AWSD][0-9]{1,2}$/g

const reg2=new RegExp(/^[AWSD][0-9]{1,2}$/g)
const match = reg2.test('S12d')
console.log(match)