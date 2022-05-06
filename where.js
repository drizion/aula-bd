import conn from './connection.js'

conn.connect(function(err) {
    if (err) throw err;
    conn.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });