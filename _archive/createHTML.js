const pug = require('pug')
const fs = require('fs')

const main_constants = {
	pageTitle: 'b3n10',
	navLinks: [
		'about', 'contact'
	],
	projects: [
		{
			title:	'Random Quotes',
			link:		'https://randomquotes2018.herokuapp.com',
			desc:		'Encourage people with inspirational phrases and quotes',
			tech:		'PHP, AJAX'
		},
		{
			title:	'Tic Tac Toe',
			link:		'http://b3n10.github.io/tictactoe-in-vuejs/',
			desc:		'Classical casual game',
			tech:		'VueJS'
		}
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


