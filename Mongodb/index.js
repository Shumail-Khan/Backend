let express = require('express');
const dbConnection = require('./dbConnection');
const { ObjectId } = require('mongodb');
let app = express();
app.use(express.json());

app.get("/student-read", async function (req, res) {
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("Student")

    let data = await studentCollection.find({}).toArray()
    let obj = {
        status:1,
        msg : "Student List",
        data
    } 

    res.send(obj);
});

app.post('/student-insert', async function (req, res) {
    let myDB = await dbConnection(); //Importing the dbConnection function
    let studentCollection = myDB.collection("Student")
    // let obj = {
    //     name: req.body.sName,
    //     email: req.body.sEmail,
    // }
    let {sName, sEmail} = req.body;
    let obj = {sName, sEmail};
    
    //let data = await studentCollection.find({"sEmail":sEmail}).toArray() //My logic
    // if(data != [])
    // {
    //     res.send(
    //         {
    //             status:0,
    //             msg:"There is already a record with that Email.",
    //             records:data
    //         })
    // }

    let checkemail = await studentCollection.findOne({sEmail})
    if(checkemail){
        return res.send({
                        status:0,
                        msg:"There is already a record with that Email.",
                        records:checkemail
                    })
    }
    
    let insertResult = await studentCollection.insertOne(obj);
    //console.log(insertResult);
    let insertResponse = {
        status: 1,
        message: "Student Inserted",
        data: insertResult
    };
    res.send(insertResponse);
});

app.delete('/student-delete/:id', async function(req, res){
    let {id} = req.params;
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("Student")

    let delRes = await studentCollection.deleteOne({_id: new  ObjectId(id)})
    
    let deleteResponse = {
        status: 1,
        message: "Student Deleted",
        delRes
    };
    res.send(deleteResponse);
})

app.put('/student-update/:id', async function (req, res) {
    let {id} = req.params;
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("Student")
    
    let {sName, sEmail} = req.body;
    let obj = {};

    if(sName!=="" && sName!==undefined && sName!==null){
        obj['sName']=sName;
    }
    if(sEmail!=="" && sEmail!==undefined && sEmail!==null){
        obj['sEmail']=sEmail;
    }

    let updateRes = await studentCollection.updateOne({_id:new ObjectId(id)},{$set: obj})
    let updateResponse = {
        status: 1,
        message: "Student Info Updated",
        updateRes
    };
    res.send(updateResponse);
});


app.listen(8000, function () { 
    console.log('Example app listening on port 8000!'); //http://localhost:8000/studet-read
});