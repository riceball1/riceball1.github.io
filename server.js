const http = require('http');
const fs = require('fs');
const html = fs.readFile('./index.html', (err, html) => {
    if (err) {
        throw err;
    }
    http.createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(html)
        res.end()
    }).listen(3000)
})

