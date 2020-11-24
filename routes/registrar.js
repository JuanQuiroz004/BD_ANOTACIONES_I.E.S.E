const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

router.get('/usuarios', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM ESTUDIANTE ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });


router.post('/nuevousuario', (req, res) => {
  const { NOMBRE_COMPLETO, CORREO_ELECTRONICO} = req.body;
  let actor = [NOMBRE_COMPLETO, CORREO_ELECTRONICO];
  let nuevoActor = `INSERT INTO ESTUDIANTE (NOMBRE_COMPLETO,CORREO_ELECTRONICO,COD_DIRECTIVOS)
                  VALUES(?,?,1234)`;
  mysqlConnection.query(nuevoActor, actor, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Estudiante registrado`, });
  });
});
module.exports = router;

