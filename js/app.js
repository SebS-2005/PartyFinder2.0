const db = require('./db');

// Ejecutar una consulta
db.query('SELECT * FROM usuarios', (err, resultados) => {
  if (err) {
    console.error('❌ Error en la consulta:', err);
    return;
  }
  console.log('📋 Resultados:', resultados);
});







