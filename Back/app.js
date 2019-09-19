// libraries
require('dotenv').config();
const  express  =  require('express');
const  app  =  express();
const  bodyParser  =  require('body-parser');
const addTr = require('./routes/addTr');


// app config
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));
// Add Cors headers, and respect the order !!!
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
app.use('/', addTr)

// API implementation
// app.get("/", (res) => {
//     res.send("Hello world");
// })
/// 404 in case of route not found
// app.use(function(req, res, next) {
//     var  err  =  new  Error('Not Found');
//     err.status  =  404;
//     next(err);
// });

//starting server
const  server  =  app.listen( process.env.PORT  ||  5000, function(){
    console.log('Listening on port '  +  server.address().port);
});