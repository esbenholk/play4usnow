
DROP TABLE IF EXISTS userdata;

CREATE TABLE userdata(

    id SERIAL primary key,
    username VARCHAR,
    humanity_check VARCHAR,
    age INTEGER,
    email VARCHAR,
    name VARCHAR, 
    has_tipped_performer VARCHAR,
    performer1 INTEGER, 
    performer2 INTEGER, 
    performer3 INTEGER, 
    performer4 INTEGER, 
    performer5 INTEGER, 
    performer6 INTEGER, 
    performer7 INTEGER, 
    performer8 INTEGER, 
    performer9 INTEGER, 
    global INTEGER, 

    readiness VARCHAR, 
    what_you_want_singles_to_know VARCHAR,
    feelings_towards_danger VARCHAR,
    sex_role VARCHAR,
    sex_work_experience VARCHAR,
    sex_work_consumer_experienc VARCHAR,







    performer_choice VARCHAR, 
    fetish VARCHAR CHECK (fetish != ''),
  
    lovers INTEGER,
    honesty_level INTEGER, 
    desires VARCHAR CHECK (desires != ''),
    embarresments VARCHAR CHECK (embarresments != ''),
    first_pet VARCHAR CHECK (first_pet != ''),
    ejaculations INTEGER,
    gut_feeling INTEGER, 
    preference VARCHAR CHECK (preference != ''),
    secrets VARCHAR,
    home VARCHAR, 
    economy VARCHAR, 
    sexuality VARCHAR, 
    locations VARCHAR 


    

);
