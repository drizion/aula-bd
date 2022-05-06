import conn from './connection.js'

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");    
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});