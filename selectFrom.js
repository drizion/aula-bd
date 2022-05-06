import conn from './connection.js'

conn.connect(function(err) {
    if (err) throw err;
    conn.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });