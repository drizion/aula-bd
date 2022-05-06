import * as mysql from 'mysql'

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

export default conn