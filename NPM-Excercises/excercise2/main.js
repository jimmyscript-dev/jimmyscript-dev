const fs = require('fs-extra');

const file = 'hello.txt'
fs.outputFileSync(file, 'Hello from NodeJS!')

const data = fs.readFileSync(file, 'utf8')
console.log(data)