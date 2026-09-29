const http = require('http')

// console.log(http)

const server = http.createServer((req,res)=>{
    // res.statusCode = 201
    // res.setHeader('content-type','text/html')
    res.writeHead('201',{'content-type':'text/html'})
    
    res.end()
})  
server.listen(3000,()=>{
    console.log('the server is running on port 3000')
})