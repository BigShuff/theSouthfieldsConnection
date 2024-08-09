//import the http module required for the server
const http = require('http');

//create the server. The server takes in a callback with two args request and response
//request holds incoming information such as url, and any extra url parameters for a particular page load. and type of request i.e GET, POST, DELETE etc.
const server = http.createServer((req, res) => {
    console.log('request made.....');
});

//The server is created above but not doing anything so we need to tell it to listen which starts the server and what port to listen on.
//localhost is the default name for the server, and could be ommited but for learning sake it is stipulated here.
//the callback fires when the server starts listening.
//port numbers are like 'doors' in your computer, they allow your software to communicate with the internet. Each piece of software uses a different port.
//port 3000 is a common port for servers configured for local web development
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});