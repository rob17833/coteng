const express = require('express');
const addTr = express.Router();
const connection = require('../conf.js');

addTr.post('/addTr', (req, res) => {
    const formData = req.body;
    res.header("Access-Control-Allow-Origin", "*");
    connection.query('INSERT INTO timeregistration SET?', formData, (error) => {
        if (error) {
            console.log(error)
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
})

module.exports = addTr;