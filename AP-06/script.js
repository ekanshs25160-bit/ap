const http = require('http')
const {users,posts} = require('./data.js')
const server = http.createServer((req,res)=>{
    console.log(req.url)
    const path = req.url.split('/')
    console.log(path)
    const id = Number(path[2])
    if(req.url == '/users' && req.method == 'GET'){
        res.writeHead(200,{
            'Content-type': 'application/json'
        })
        res.end(JSON.stringify(users))
    }
    else if (req.url == `/users/${id}` && req.method == 'GET'){
        res.writeHead(200,{
            'Content-type': 'application/json'
        })
        const user = users.find((user)=>user.id===id)
        res.end(JSON.stringify(user))
    }
    else if (req.url == '/users' && req.method == 'POST'){
        req.on('data', (chunk)=>{
            body += chunk
        })
        res.on('end',()=>{
            console.log(body)
            users.push(body)
            res.end(JSON.stringify(users))
        })
    }
})

server.listen(3000)