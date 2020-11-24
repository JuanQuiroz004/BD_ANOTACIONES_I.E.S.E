const express = require('express');
const app = express();
const cors = require('cors');
/*const iniciarsesionestudiante = require ('./routes/usuario/iniciarsesionestudiante');
const iniciarsesiondocente = require ('./routes/usuario/iniciarsesiondocente');
const iniciarsesionacudiente = require ('./routes/usuario/iniciarsesionacudiente');
const formatodisciplinario = require ('./routes/usuario/formatodisciplinario');*/
// Ajustes


//importante para conexion del front con el back
//Uso de cors
app.use(cors({origin: 'https://equipo4-ppi-2020.vercel.app/'}));
// conectar con el link de su frontend app.use(cors({origin: 'https://ppi-app.vercel.app/'}))


app.set('port', process.env.PORT || 3306);

// Middlewares
app.use(express.json());

// Routes//
app.use('/api/', require('./routes/registrar'));
app.use('/api/', require('./routes/usuario/iniciarsesiondocente'));
app.use ('/api/',require ('./routes/usuario/iniciarsesionestudiante'));
app.use ('/api/', require ('./routes/usuario/iniciarsesionacudiente'));
app.use ('/api/', require ('./routes/seguimiento/seguimientoacudiente'));
app.use ('/api/', require ('./routes/formatodisciplinario/formatodisciplinario'));

/*app.use('/api/iniciarsesionestudiante', iniciarsesionestudiante);
app.use('/api/iniciarsesionacudiente', iniciarsesionacudiente);
app.use('/api/iniciarsesiondocente', iniciarsesiondocente);
app.use('/api/formatodisciplinario',formatodisciplinario );*/

// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});