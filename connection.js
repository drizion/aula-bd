import * as mysql from 'mysql'

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });