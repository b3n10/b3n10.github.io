const pug = require('pug')
const fs = require('fs')

const compileFunction = pug.compileFile('index.pug')

const data = compileFunction({
	home: 'home',
	about: 'about'
})

fs.writeFile('index.html', data, (err) => {
	if (err) throw err
	console.log('Saved pug!')
})
