const express = require('express');
const userRouter = express.Router();
const connection = require('../conf.js');

// insert new  dev tuple in timeregistration table
userRouter.post('/addTr', (req, res) => {
    const formData = req.body;
    res.header("Access-Control-Allow-Origin", "*");
    connection.query('INSERT INTO timeregistration SET?', formData, (error) => {
        if (error) {
            console.log(error)
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
});

// select entries by dates and invoiceCode for admin
userRouter.post('/period', (req, res) => {
    const start = req.body.startDate;
    const end = req.body.endDate;
    const invoice = req.body.invoiceCode;
    connection.query('SELECT time, employee_Id, date, customer_Id, invoiceCode_Id, issueNumber_Id, issueName_Id, ticketCountry_Id, ticketNumber_Id from timeregistration WHERE date>=? AND date<=? And invoiceCode_Id=? ', [start, end, invoice], (error, results) =>{
        if (error){
            return res.sendStatus(500).send('Something bad happened')
        }
        res.json(results);
        console.log(results)
    });
});

// select worksheet by dev
userRouter.post('/:id', (req, res) => {
    const user = req.query.username;
    const formData = req.body.date;
    connection.query('SELECT* from timeregistration WHERE employee_Id=? AND date=?', [user, formData], (error, results) =>{
        if (error) {
            return res.status(500).send('something went wrong')
        }
        res.json(results);
    });
});

// verify usersname and password
userRouter.post('/auth/login', function(req, res) {
    const user = req.body.username;
    const password = req.body.password;
    connection.query('SELECT * from employee where username=? AND password=?', [user, password], (error, results) => {
        console.log(results)
        if (results.length > 0) {
            return res.sendStatus(200)
        }
        res.sendStatus(500);
    })
});

// delete row
userRouter.delete('/delete/:id', function(req, res){
    const id = req.params.id;
    if (id) {
        connection.query('DELETE from timeregistration WHERE timeregistrationId=?', id, (error) => {
            if (error){
                return res.status(500).send('something wrong happened')
            }
            res.status(200).send('deleted!');
        });
    };
});

// update row
userRouter.put('/update/:id', function(req, res){
    const rowId = req.params.id;
    console.log(rowId);
    const formData = req.body;
    connection.query('update timeregistration set? where timeRegistrationId=?', [formData, rowId], (error)=>{
        if(error){
            return res.status(500).send('can not update the table')
        }
        res.sendStatus(200);
    });
});

module.exports = userRouter;