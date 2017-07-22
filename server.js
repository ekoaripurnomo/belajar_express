const express = require('express');
const app = express();
const path = require('path');

var port = 3000;

app.get('/', (req,res)=>{
	res.sendFile(path.join(__dirname, '/app/views/index.html'))
});

app.listen(port);
console.log('Connected to port'+port);