const db = require("../config/database");

async function queryResult(query, values) {
  const connection = await db.getConnection();
  await connection.connect();
  const [results] = await connection.query(query, values);
  await connection.end();
  return results;
}

module.exports = {
  RetrieveAgency: async (agency_name) => {
    const query =
      "select agency_id from agencies where agency_name LIKE '%?%';";
    return await queryResult(query, [agency_name]);
  },
};
