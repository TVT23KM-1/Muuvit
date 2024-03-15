-- Active: 1710485472561@@127.0.0.1@5432@postgres


DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Groups_ CASCADE;
DROP TABLE IF EXISTS RequestToGroup CASCADE;
DROP TABLE IF EXISTS UsersToGroups CASCADE;
DROP TABLE IF EXISTS Favourites CASCADE;
DROP TABLE IF EXISTS Reviews CASCADE;
DROP TABLE IF EXISTS Events_ CASCADE;
DROP TABLE IF EXISTS Movies CASCADE ;

CREATE TABLE Users (
    userId SERIAL PRIMARY KEY,
    userName VARCHAR(255) NOT NULL,
    credentials VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE Groups_ (
    groupId SERIAL PRIMARY KEY,
    groupName VARCHAR(255) NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(userId)
);

CREATE TABLE RequestToGroup (
    requestToGroupId SERIAL PRIMARY KEY,
    userId INT NOT NULL,
    groupsId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(userId),
    FOREIGN KEY (groupsId) REFERENCES Groups_(groupId)
);

CREATE TABLE UsersToGroups (
    usersToGroupsId SERIAL PRIMARY KEY,
    userId INT NOT NULL,
    groupId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(userId),
    FOREIGN KEY (groupId) REFERENCES Groups_(groupId)
);

-- UserToFavorite nimetty Favourites nimiseksi.
CREATE TABLE Favourites (
    favouriteId SERIAL PRIMARY KEY,
    movieId INT NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(userId)
);

CREATE TABLE Reviews (
    reviewId SERIAL PRIMARY KEY,
    movieId INT NOT NULL,
    Stars INT NOT NULL,
    Description_ TEXT NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(userId)
);

CREATE TABLE Events_ (
    groupToEventId SERIAL PRIMARY KEY,
    eventId INT NOT NULL,
    groupId INT NOT NULL,
    Foreign Key (groupId) REFERENCES Groups_(groupId)
);

CREATE TABLE Movies (
    movies SERIAL PRIMARY KEY ,
    movieId INT NOT NULL,
    groupId INT NOT NULL,
    FOREIGN KEY (groupId) REFERENCES Groups_(groupId)
);