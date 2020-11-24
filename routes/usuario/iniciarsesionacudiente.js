const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../db/db');

router.get('/acudiente', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM  ACUDIENTE ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });



router.post('/registraracudiente', (req, res) => {
  const {CC_ACUDIENTE, NOMBRE_COMPLETO,CORREO_ELECTRONICO,TELEFONO} = req.body;

  let actor = [CC_ACUDIENTE, NOMBRE_COMPLETO,CORREO_ELECTRONICO,TELEFONO];

  let nuevoActor = `INSERT INTO DOCENTE(CC_ACUDIENTE, NOMBRE_COMPLETO,CORREO_ELECTRONICO,TELEFONO)
                  VALUES(?,?,?,?)`;


  mysqlConnection.query(nuevoActor, actor, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Ingreso Exitoso`, });
  });
});
module.exports = router;