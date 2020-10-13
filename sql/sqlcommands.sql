
DROP TABLE IF EXISTS userdata;

CREATE TABLE userdata(

    id SERIAL primary key,
    username VARCHAR,
    humanity_check VARCHAR,
    age INTEGER,
    email VARCHAR,
    name VARCHAR, 
    has_tipped_performer VARCHAR,
    MistressAmandara INTEGER, 
    PetraBlair INTEGER, 
    Kiko INTEGER, 
    VioletViolent INTEGER, 
    VegaBonita INTEGER, 
    GoddessVanessa INTEGER, 
    GoofyToof INTEGER, 
    sendatiptoeveryone INTEGER, 

    readiness VARCHAR, 
    what_you_want_singles_to_know VARCHAR,
    feelings_towards_danger VARCHAR,
    sex_role VARCHAR,
    sex_work_experience VARCHAR,
    sex_work_consumer_experienc VARCHAR,
    follows_link_to_foot_porn VARCHAR,
    looking_for VARCHAR,
    being_a_dog VARCHAR,
    does_data_make_horny VARCHAR,







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
