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

// select ws by dates for admin
userRouter.post('/startDate/endDate', (req, res) => {
    const start = req.body.startDate;
    const end = req.body.endDate;
    connection.query('SELECT time, employee_Id, date, customer_Id, invoiceCode_Id, issueNumber_Id, issueName_Id, ticketCountry_Id, ticketNumber_Id from timeregistration WHERE date>=? AND date<=? ', [start, end], (error, results) =>{
        if (error){
            return res.sendStatus(500).send('aie, pas bon')
        }
        res.json(results);
        console.log(results)
    })
})
// select worksheet by employee
userRouter.get('/:id', (req, res) => {
    const user = req.query.username
    connection.query('SELECT* from timeregistration WHERE employee_Id=? AND date=CURRENT_DATE()', user, (error, results) =>{
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