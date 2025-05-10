const { MongoClient } = require('mongodb');

let DBURL = "mongodb://127.0.0.1:27017/"; //MongoDB URL
let DBName = "StudentDB"; //Database Name

const client = new MongoClient(DBURL);
let dbConnection = async ()=>{
    await client.connect();
    console.log("Connected to MongoDB server successfully!");
    let db = client.db(DBName)

    return db;
};

module.exports = dbConnection; //Exporting the dbConnection function
//This function will be used to connect to the database and return the database object.