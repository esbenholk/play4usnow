var spicedPg = require("spiced-pg");
var database = spicedPg(
  process.env.DATABASE_URL ||
    "postgres:postgres:postgres@localhost:5432/coronachronicles"
);

/////SELECTING TOTAL INFORMATIONS
module.exports.createSentences = function createSentences(sentence) {
  console.log("in database.js", sentence);
  return database.query(
    `INSERT INTO chronicles (sentence) VALUES ($1) RETURNING *`,
    [sentence]
  );
};

module.exports.getSentences = function getSentences() {
  return database.query(`SELECT * FROM chronicles`);
};
