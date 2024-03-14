const express = require("express");
const app = express();
var mysql = require("mysql");
var sql = "";
var bodyParser = require("body-parser");
app.use(express.json());
var cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
var db = mysql.createConnection({
    host: "184.168.109.253",
    user: "aiotylabs",
    password:"aiotylabs2020!",
    database:"aioty",
    port:"3306"
  });
  db.connect(function (err) {
    if (err) throw err;
    console.log("mysql db Connected!");
    // // Database creation
    // sql = "CREATE DATABASE IF NOT EXISTS precision_farming";
    // db.query(sql, (err, res) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("Database created");
    //   }
    // });
})
app.get('/',(req,res)=>{
    db.query('select * from test',(err,result)=>{
        if (err) console.log(err);
        res.json({status:200,message:"Success",result})
    })
})

app.listen(5000,()=>{
    console.log('server is up and running');
})