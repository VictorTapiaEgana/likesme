const pool = require('../db_config.js');

let client;

async function listar(){

    try {

        client = await pool.connect();
        const resultado = await client.query(`SELECT id, usuario, url, descripcion,likes FROM posts ORDER BY usuario ASC;`);
        return resultado.rows;
        
    } catch (error) {

        console.log(`X Error al conectar a la base de datos : `, error);
        
    } finally {

        client.release();

    }

};

module.exports = listar;