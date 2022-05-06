import conn from './connection.js'

conn.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});