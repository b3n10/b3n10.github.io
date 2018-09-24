const pug = require('pug')

const cF = pug.compileFile('index.pug')

console.log(cF({
	age: 29
}))
