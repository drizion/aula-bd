import conn from './connection.js'

conn.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5";
    conn.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });