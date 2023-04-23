const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: 'password',
    database: 'mysqlinjection',
})

connection.connect(err => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database!');
  });

module.exports = connection;