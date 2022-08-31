import http from 'http';

//const http = require('http');

http.createServer((req,res)=>{
    console.log('logging');
}).listen(4000);