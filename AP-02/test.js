const r = require('readline')

const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter a number ", (num)=>{
    console.log(num)
    rl.close()
})