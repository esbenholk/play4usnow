
DROP TABLE IF EXISTS userdata;

CREATE TABLE userdata(
id SERIAL primary key,
username VARCHAR CHECK (username != ''),
fetish VARCHAR CHECK (fetish != ''),
age INTEGER,
lovers INTEGER,
honesty_level INTEGER
);
