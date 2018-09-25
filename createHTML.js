const pug = require('pug')
const fs = require('fs')

const main_constants = {
	pageTitle: 'b3n10',
	navLinks: [
		'home', 'about', 'contact'
	]
}

fs.readdir('src/', (err, files) => {
	files.forEach(file => {
		if (file.includes('pug') && !file.includes('swp')) {
			const compileFunction = pug.compileFile(`src/${file}`)
			const data = compileFunction(main_constants)
			const html = file.slice(0, file.indexOf('.'))

			fs.writeFile(`${html}.html`, data, (err) => {
				if (err) throw err
				console.log(`Converted ${file} to ${html}.html`)
			})
		}
	})
})


