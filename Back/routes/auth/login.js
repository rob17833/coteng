const express = require('express');
const login = express.Router();
const connection = require('../conf.js');

login.post('/auth/login', (req, res) => {
	const username = req.body
	
	console.log(username);
	console.log(password);
    res.header("Access-Control-Allow-Origin", "*");
    connection.query('SELECT FROM employee where username = ?', username, (error) => {
        if (error) {
            console.log(error)
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
})