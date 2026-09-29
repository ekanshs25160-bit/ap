if(req.url == `/items/:id` && req.method == 'GET'){
    const url = req.url
    const arr = url.split('/')[2]
    const id = arr[2]
    if(url.startsWith('/items') && aarr.length === 3){
        res.writeHead(200, {
            'content-type':'text/plain'
        })
        res.end()
    }
}