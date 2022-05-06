import conn from './connection.js'

conn.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE customers";
    conn.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table deleted");
    });
  });