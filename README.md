# Belajar Express
Merupakan materi belajar membuat simple web server menggunakan nodejs dan express

*	jalankan perintah >npm init pada folder web 
	akan menghasilkan file package.json dengan isi :
	```json
	{
	  "name": "belajar_express",
	  "version": "1.0.0",
	  "description": "Belajar membuat web server menggunakan nodejs dan express",
	  "main": "index.js",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
	  "repository": {
	    "type": "git",
	    "url": "git+https://github.com/ekoaripurnomo/belajar_express.git"
	  },
	  "author": "eko",
	  "license": "ISC",
	  "bugs": {
	    "url": "https://github.com/ekoaripurnomo/belajar_express/issues"
	  },
	  "homepage": "https://github.com/ekoaripurnomo/belajar_express#readme"
	}
	```

*	install nodemon, edit package.json edit script
	```json
	"main": "server.js",
	"scripts": {
	    "start": "nodemon"
	},
	```

* 	jalan perintah >npm install -g nodemon
* 	buat file server.js di folder utama
	```js
	const http = require('http');
	var port = 3000;
	var server = http.createServer((req, res)=>{
		res.write('Hello World');
		res.end();
	});
	server.listen(port);
	```
*	jalan >npm start
*	buka di browser localhost:3000
*	dengan method tersebut sudah dapat membuat webserver, tetapi akan sangat merepotkan sekali dalam pembuatan scripthtml nya, karena script tersebut ada pada script berikut :
	```js
	var server = http.createServer((req, res)=>{
		res.write('Hello World');
		res.end();
	});
	```
*	karena hal tersebut maka kita akan menginstall express >npm i express --save 
* 	setelah akan muncul dependencies di package.json
	```js
	"dependencies": {
	    "express": "^4.15.3"
	}
	```
*	edit server.js supaya mengarah ke express
	```js
	const express = require('express');
	const app = express();
	const path = require('path');

	var port = 3000;

	app.get('/', (req,res)=>{
		res.sendFile(path.join(__dirname, '/app/views/index.html'))
	});

	app.listen(port);
	```
*	buat folder /app/views, buat file index.html didalam folder tersebut
*	web server telah berhasil di buat
*	buat console.log connect to port edit server.js
	```js
	app.listen(port);
	console.log('Connected to port'+port);
	```