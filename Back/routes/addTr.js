const express = require('express');
const userRouter = express.Router();
const connection = require('../conf.js');

// insert new tuple in timeregistration table
userRouter.post('/addTr', (req, res) => {
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
// get user entries
userRouter.get('/ws', (req, res) => {
    connection.query('SELECT * from timeregistration', (error, results) => {
        if (error) {
            return res.status(500).send('erreur lors du chargement')
        }
        res.json(results);
    });
});
// select worksheet by employee
userRouter.get('/:id', (req, res) => {
    const user = req.query.username
    connection.query('SELECT* from timeregistration WHERE employee_Id=?', user, (error, results) =>{
        if (error) {
            return res.status(500).send('something went wrong')
        }
        res.json(results);
    });
})
// Logpage
// userRouter.post('/auth/login', (req, res) => {
//     const user = req.body;
//     connection.query('SELECT* from employee where username = ?', [user.username], (error, results) => {
//         if (error) {
//             return res.sendStatus(500);
//         }
//         res.json(results);
//     })
// })

userRouter.post('/auth/login', function(req, res) {
    const user = req.body.username;
    const password = req.body.password;
    if (user && password) {
        connection.query('SELECT * from employee where username=? AND password=?', [user, password], (error, results) => {
            console.log(results)
            if (results.length > 0) {
                return res.sendStatus(200)
            }
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(500)
    };
})

module.exports = userRouter;