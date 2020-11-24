const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'bvfj9svyubbkjumcynuh-mysql.services.clever-cloud.com',
  user: 'uuru6a09cd3d6xin',
  password: '4lyjuXwVvr3Aqyfz06iD',
  database: 'bvfj9svyubbkjumcynuh',
  multipleStatements: true
});
mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});

module.exports = mysqlConnection;
