const db = require("../config/database");

module.exports = async function queryResult(query, values) {
    const connection = await db.getConnection();
    await connection.connect();
    const [ results ] = await connection.query(query, values);
    await connection.release();
    return results;
}