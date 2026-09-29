const http = require("http");
const dotenv = require('dotenv')

dotenv.config()

const server = http.createServer((req,res)=>{

})

server.listen(process.env.PORT, ()=>{
    console.log('server is running')
})