const pool = require('../db_config.js');

let client;

async function actualizar(id) {

    try {

        client = await pool.connect();
        const consulta =`UPDATE posts SET likes = likes + 1 WHERE id = $1`;
        const variables = [id];
        const resultado = await client.query(consulta,variables);        
        
    } catch (error) {

        console.log(`X Error al conectarse a la base de datos : `, error);
        
    } finally {

        client.release();

    }
    
}

module.exports = actualizar;