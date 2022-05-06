import conn from './connection.js'

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});