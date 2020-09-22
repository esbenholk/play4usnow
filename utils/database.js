var spicedPg = require("spiced-pg");
var database = spicedPg(
  process.env.DATABASE_URL ||
    "postgres:postgres:postgres@localhost:5432/userdata"
);

/////SELECTING TOTAL INFORMATIONS
module.exports.createUser = function createUser(username) {
  return database.query(
    `INSERT INTO userdata (username) VALUES ($1) RETURNING *`,
    [username]
  );
};




module.exports.getSentences = function getSentences() {
  return database.query(`SELECT * FROM userdata`);
};
