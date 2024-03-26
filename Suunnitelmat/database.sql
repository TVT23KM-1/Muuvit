-- Active: 1710485472561@@127.0.0.1@5432@postgres


DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Groups_ CASCADE;
DROP TABLE IF EXISTS RequestToGroup CASCADE;
DROP TABLE IF EXISTS UsersToGroups CASCADE;
DROP TABLE IF EXISTS Favourites CASCADE;
DROP TABLE IF EXISTS Reviews CASCADE;
DROP TABLE IF EXISTS Events_ CASCADE;
DROP TABLE IF EXISTS Movies CASCADE ;

DROP TYPE IF EXISTS participant_status;

CREATE TABLE Users (
                       user_id SERIAL PRIMARY KEY,
                       user_name VARCHAR(255) UNIQUE NOT NULL,
                       password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE Groups_ (
                         group_id SERIAL PRIMARY KEY,
                         group_name VARCHAR(255) UNIQUE NOT NULL,
                         group_description TEXT NOT NULL
);

-- CREATE TABLE RequestToGroup (
--     requestToGroupId SERIAL PRIMARY KEY,
--     userId INT NOT NULL,
--     groupsId INT NOT NULL,
--     FOREIGN KEY (userId) REFERENCES Users(userId),
--     FOREIGN KEY (groupsId) REFERENCES Groups_(groupId)
-- );

CREATE TYPE participant_status AS ENUM ('accepted', 'pending', 'owner');
CREATE TABLE UsersToGroups (
                               users_to_groups_id SERIAL PRIMARY KEY,
                               user_id INT NOT NULL,
                               group_id INT NOT NULL,
                               status participant_status,
                               FOREIGN KEY (user_id) REFERENCES Users(user_id),
                               FOREIGN KEY (group_id) REFERENCES Groups_(group_id)
);

-- UserToFavorite nimetty Favourites nimiseksi.
CREATE TABLE Favourites (
                            favourite_id SERIAL PRIMARY KEY,
                            movie_id INT NOT NULL,
                            user_id INT NOT NULL,
                            share_slur VARCHAR(255) NOT NULL,
                            FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Reviews (
                         review_id SERIAL PRIMARY KEY,
                         movie_id INT NOT NULL,
                         stars INT NOT NULL,
                         description TEXT NOT NULL,
                         user_id INT NOT NULL,
                         FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Events_ (
                         event_id SERIAL PRIMARY KEY,
                         event_id_on_finnkino INT NOT NULL,
                         group_id INT NOT NULL,
                         Foreign Key (group_id) REFERENCES Groups_(group_id)
);

CREATE TABLE Movies (
                        movie_id SERIAL PRIMARY KEY ,
                        movie_id_on_tmdb INT NOT NULL,
                        group_id INT NOT NULL,
                        FOREIGN KEY (group_id) REFERENCES Groups_(group_id)
);
