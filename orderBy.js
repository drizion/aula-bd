import conn from './connection.js'

conn.connect(function(err) {
    if (err) throw err;
    conn.query("SELECT * FROM customers ORDER BY name", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });