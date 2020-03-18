
DROP TABLE IF EXISTS chronicles;

CREATE TABLE chronicles(
id SERIAL primary key,
sentence VARCHAR CHECK (sentence != '')
);
