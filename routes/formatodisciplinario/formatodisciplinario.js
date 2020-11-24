const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../db/db');

router.get('/anotacion', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM  ANOTACION ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });



router.post('/registraranotacion', (req, res) => {
  const {COD_ANOTACION, FECHA_ANOTACION,DESCRIPCION,ID_ESTUDIANTE,CC_ACUDIENTE,CC_DOCENTE} = req.body;

  let actor = [COD_ANOTACION, FECHA_ANOTACION,DESCRIPCION,ID_ESTUDIANTE,CC_ACUDIENTE,CC_DOCENTE];

  let nuevoActor = `INSERT INTO DOCENTE(COD_ANOTACION, FECHA_ANOTACION,DESCRIPCION,ID_ESTUDIANTE,CC_ACUDIENTE,CC_DOCENTE)
                  VALUES(?,?,?,756,8005,97098)`;


  mysqlConnection.query(nuevoActor, actor, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Anotacion Registrada`, });
  });
});
module.exports = router;

