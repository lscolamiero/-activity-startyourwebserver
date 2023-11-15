let http = require('http')

let server = http.createServer((req, res) => {
    res.writeHeader(206)
    res.write('<h1>Bark!</h1><img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="206" height="250px" width="250px">');
    res.end();
});

server.listen(3000, function() {
    console.log('I am awake')
});
