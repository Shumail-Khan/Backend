let express = require('express');
let app = express();

app.use(express.json());

let checktoken = (req, res, next) =>{ // Middleware function
    console.log(req.query.token);
    if(req.query.token === "" || req.query.token === undefined) {
        res.send(
            {
                status:1,
                msg:"Token is empty!"});
    }
    if(req.query.token !== "123456") { // Check if token is valid
        return res.send(
            {
                status:0,
                msg:"Invalid token!"});
    }
    next(); // Needed to move forward to the next middleware or route handler
}
//app.use(checktoken); // Use middleware for all routes

app.get('/weather/:id', function (req, res) {
    res.send({status:205, msg:'Hello World!', id:req.params.id});
    }
);

app.post('/', function (req, res) {
    res.send({status:200, msg:'Hello World!', reqbody:req.body});
    });
app.post('/news', checktoken,function (req, res) {
        res.send({status:201, msg:'Sunny World!'});
    });




app.listen(3000);