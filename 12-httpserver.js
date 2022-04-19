const http = require('http')

const server = http.createServer((req, res) => { // both params are objects: req is incomin request (client request from web browser so you'll have information in that request option, and res is what we send back)
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('here is our short history')
    } else {
        res.end(`<h1>Oops!</h1>
        <p> We can't seem to find the page you are looking for </p>
        <a href = '/'> back home </a>`)
    }
})

server.listen(5000)