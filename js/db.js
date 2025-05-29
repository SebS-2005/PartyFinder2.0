const mysql = require('mysql2');


const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'partyfinder',
  port: 3306 
});

// Conectar
conexion.connect((err) => {
  if (err) {
    console.error('❌ Error de conexión:', err);
    return;
  }
  console.log('✅ Conexión exitosa a la base de datos.');
});

module.exports = conexion;
