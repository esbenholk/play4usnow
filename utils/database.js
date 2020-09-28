var spicedPg = require("spiced-pg");
var database = spicedPg(
  process.env.DATABASE_URL ||
    "postgres:postgres:postgres@localhost:5432/userdata"
);

/////CREATING USERNAME AND ID
module.exports.createUser = function createUser(username, age) {
  return database.query(
    `INSERT INTO userdata (username, age) VALUES ($1, $2) RETURNING *`,
    [username, age]
  );
};

module.exports.checkHumanity = function checkHumanity(humanityCheck, id) {
  return database.query(
    `UPDATE userdata SET humanity_check = $1 WHERE id =$2 RETURNING *`,
    [humanityCheck, id]  
  );
};




module.exports.getUser= function getUser(id) {
  return database.query(`SELECT * FROM userdata WHERE id=$1`, [id]);
};
