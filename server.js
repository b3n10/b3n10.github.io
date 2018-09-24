const http = require('http')
const fs = require('fs')

const file = fs.readFileSync('index.html')

const app = http.createServer((q, s) => {
	s.write(file)
	s.end()
})

app.listen(3000, () => {
	if (process.send) process.send( {
		event: 'online',
		url: 'http://localhost:3000'
	})
})
