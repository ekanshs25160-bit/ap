const fs = require('fs')

let count = 0
const mem = process.memoryUsage().rss/1024/1024
console.log(mem)

const stream = fs.createReadStream('Big_dATA.csv')

stream.on('data', (chunk)=>{
    count ++
    // console.log(chunk)
})

stream.on('end',()=>{
    console.log('data read complete')
    const mem1 = process.memoryUsage().rss / 1024 / 1024
console.log(mem1)
})