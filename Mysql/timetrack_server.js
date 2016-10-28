var http = require('http');
var work = require('.lib/timetrack');
var mysql= require('mysql');

var express = require('express');
var app = express();

var db = mysql.createConnection(
  {
    host:    '127.0.0.1',
    user:    'myuser',
    password:'mypassword',
    database:'timetrack'
  }
);

app.get('/',function(req,res){
  work.add(db,req,res);
})
app.get('/archive',function(req,res){
  work.archive(db,req,res);
})
app.get('/delete',function(){
  work.delete(db,req,res);
})

db.query(
  "CREATE TABLE IF NOT EXISTS work ("
  + "id INT(10) NOT NULL AUTO_INCREMENT, "
  + "hours DECIMAL(5,2) DEFAULT 0, "
  + "date DATE, "
  + "archived INT(1) DEFAULT 0, "
  + "description LONGTEXT, "
  + "PRIMARY KEY(id))",function(err){
    if(err) throw err;
    app.listen(3000,function(){
      console.log('server start..');
    })
  }
);
