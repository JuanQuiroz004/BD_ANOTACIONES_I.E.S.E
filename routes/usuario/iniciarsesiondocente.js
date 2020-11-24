const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../db/db');

router.get('/docente', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM DOCENTE ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });



router.post('/registrardocente', (req, res) => {
  const {CORREO_ELECTRONICO,CC_DOCENTE,NOMBRE_COMPLETO, TELEFONO, GRUPOS_ASIGNADOS } = req.body;

  let actor = [CORREO_ELECTRONICO,CC_DOCENTE,NOMBRE_COMPLETO, TELEFONO, GRUPOS_ASIGNADOS];

  let nuevoActor = `INSERT INTO DOCENTE(CORREO_ELECTRONICO,CC_DOCENTE,NOMBRE_COMPLETO, TELEFONO, GRUPOS_ASIGNADOS )
                  VALUES(?,?,?,?,?)`;


  mysqlConnection.query(nuevoActor, actor, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Ingreso Exitoso`, });
  });
});
module.exports = router;
