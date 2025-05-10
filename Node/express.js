let express = require('express');
const checktoken = require('./checktoken');
require('dotenv').config(); // Load environment variables from .env file
let app = express();

app.use(express.json());

//console.log(process.env.myToken); // Access environment variable
app.use(checktoken); // Use middleware for all routes

app.get('/', function (req, res) {
    res.send({status:1, msg:'Hello World!'});
    });

app.get('/api', function (req, res) {
    res.send({status:2, msg:'Hello API!'});
    });

app.post("/login", function (req, res) {
    console.log(req.body); // { username: 'admin', password
    res.send({status:3, msg:'Login successful!', body:req.body, query:req.query});
    });

app.get("/news/", function (req, res) { // Dynamic Param
        res.send({status:4, msg:'News page!'});
        });

app.get("/news/:id", function (req, res) { // Dynamic Param
    res.send("News Details API: " + req.params.id);
    });

app.listen(3000); // http://localhost:3000
console.log('Server is running on port 3000'); 