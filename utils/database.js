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

module.exports.updatePaymentStatus= function updatePaymentStatus(has_tipped, real_name, id) {
  return database.query(
    `UPDATE userdata SET has_tipped_performer = $1, name=$2 WHERE id =$3 RETURNING *`,
    [has_tipped, real_name, id]  
  );
};
module.exports.tipPerformer1= function tipPerformer1(amount, id) {
  return database.query(
    `UPDATE userdata SET performer1=$1 WHERE id =$2 RETURNING *`,
    [amount, id]  
  );
};
module.exports.tipPerformer2= function tipPerformer2(amount, id) {
  return database.query(
    `UPDATE userdata SET perfomer2=$1 WHERE id =$2 RETURNING *`,
    [amount, id]  
  );
};
module.exports.tipPerformer3= function tipPerformer3(amount, id) {
  return database.query(
    `UPDATE userdata SET perfomer3=$1 WHERE id =$2 RETURNING *`,
    [amount, id]  
  );
};
module.exports.tipPerformer4= function tipPerformer4(amount, id) {
  return database.query(
    `UPDATE userdata SET perfomer4 =  $1 WHERE id =$2 RETURNING *`,
    [amount, id]  
  );
};
module.exports.tipPerformer5= function tipPerformer5(amount, id) {
  return database.query(
    `UPDATE userdata SET perfomer5 =  $1 WHERE id =$2 RETURNING *`,
    [amount, id]  
  );
};
module.exports.tipPerformer6= function tipPerformer6(amount, id) {
  return database.query(
    `UPDATE userdata SET perfomer6 =  $1 WHERE id =$2 RETURNING *`,
    [amount, id]  
  );
};
module.exports.tipPerformer7= function tipPerformer7(amount, id) {
  return database.query(
    `UPDATE userdata SET perfomer7 =  $1 WHERE id =$2 RETURNING *`,
    [amount, id]  
  );
};
module.exports.tipPerformer8= function tipPerformer8(amount, id) {
  return database.query(
    `UPDATE userdata SET perfomer8 =  $1 WHERE id =$2 RETURNING *`,
    [amount, id]  
  );
};
module.exports.tipPerformer9= function tipPerformer9(amount, id) {
  return database.query(
    `UPDATE userdata SET perfomer9 =  $1 WHERE id =$2 RETURNING *`,
    [amount, id]  
  );
};



module.exports.registerTurnOn= function registerTurnOn(turnon, id) {
  return database.query(
    `UPDATE userdata SET fetish = $1 WHERE id =$2 RETURNING *`,
    [turnon, id]  
  );
};



module.exports.getUser= function getUser(id) {
  return database.query(`SELECT * FROM userdata WHERE id=$1`, [id]);
};
