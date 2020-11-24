const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../db/db');

router.get('/estudiante', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM ESTUDIANTE ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });



router.post('/registrarestudiante', (req, res) => {
  const {CORREO_ELECTRONICO, NOMBRE_COMPLETO,GRADO} = req.body;

  let actor = [CORREO_ELECTRONICO, NOMBRE_COMPLETO,GRADO];

  let nuevoActor = `INSERT INTO DOCENTE(CORREO_ELECTRONICO, NOMBRE_COMPLETO,GRADO, ID_ESTUDIANTEPK,N_ANOTACIONES,COD_DIRECTIVOS )
                  VALUES(?,?,?,98,6787,4)`;


  mysqlConnection.query(nuevoActor, actor, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Ingreso Exitoso`, });
  });
});
module.exports = router;