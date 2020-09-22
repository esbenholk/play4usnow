var spicedPg = require("spiced-pg");
var database = spicedPg(
  process.env.DATABASE_URL ||
    "postgres:postgres:postgres@localhost:5432/userdata"
);

/////SELECTING TOTAL INFORMATIONS
module.exports.createUser = function createUser(username, age) {
  return database.query(
    `INSERT INTO userdata (username, age) VALUES ($1, $2) RETURNING *`,
    [username, age]
  );
};




module.exports.getUser= function getUser(id) {
  return database.query(`SELECT * FROM userdata WHERE id=$1`, [id]);
  // return database.query(`SELECT * FROM userdata WHERE `);
};
