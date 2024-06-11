const pool = require('../db_config.js');

let client;

async function insertar( usuario ,url, descripcion ){

    try {

        client = await pool.connect();
        const consulta = `INSERT INTO posts (usuario, url, descripcion, likes) VALUES( $1, $2, $3, 0)`;
        const variables = [ usuario, url, descripcion ];
        const resultado = await client.query(consulta,variables);
        
    } catch (error) {

        console.log(`X Error al conectarse a la base de datos :`, error);

    } finally {

        client.release();

    }

};

module.exports =  insertar;