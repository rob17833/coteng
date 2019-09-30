const express = require('express');
const worksheet = express.Router();
const connection = require('../config.js')

worksheet.get('./ws', (req, res) => {
    connection.query('SELECT * FROM timeregistration', (error, result) => {
        if (error) {
            return res.sendStatus(500);
        }
        res.json(result);
    });
});