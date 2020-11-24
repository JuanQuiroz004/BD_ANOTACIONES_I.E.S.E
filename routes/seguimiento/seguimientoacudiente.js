const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../db/db');

router.get('/seguimiento/:id', (req, res)=>{
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM SEGUIMIENTO WHERE id = ?', [id], (err, rows, fileds)=>{
        if (!err){
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
  });

  router.post('/registrarseguimiento', (req, res) => {
  const {nom_estudiante,nom_docente,tipo_falta,des_doc,des_est} = req.body;

  let actor = [nom_estudiante,nom_docente,tipo_falta,des_doc,des_est];

  let nuevoActor = `INSERT INTO SEGUIMIENTO(nom_estudiante,nom_docente,tipo_falta,des_doc,des_est)
                  VALUES(?,?,?,?,?)`;


  mysqlConnection.query(nuevoActor, actor, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Seguimiento Registrado`, });
  });
});
  module.exports = router;