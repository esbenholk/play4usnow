
DROP TABLE IF EXISTS userdata;

CREATE TABLE userdata(
id SERIAL primary key,
username VARCHAR CHECK (username != ''),
fetish VARCHAR CHECK (fetish != ''),
age INTEGER,
lovers INTEGER,
honesty_level INTEGER, 
desires VARCHAR CHECK (desires != ''),
embarresments VARCHAR CHECK (embarresments != ''),
first_pet VARCHAR CHECK (first_pet != ''),
ejaculations INTEGER,
gut_feeling INTEGER, 
preference VARCHAR CHECK (preference != '')

);
