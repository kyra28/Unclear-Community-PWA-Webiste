CREATE TABLE admin
(
    "id" SERIAL PRIMARY KEY,
    "pseudo" VARCHAR(30) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "token" VARCHAR(255) NOT NULL,
	"logo" VARCHAR(255) NOT NULL,
    "createdAt" timestamp,
    "updatedAt" timestamp
);

CREATE TABLE news
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "image" VARCHAR(255),
    "author_id" INTEGER REFERENCES admin(id),
    "publishedAt" timestamp,
    "createdAt" timestamp,
    "updatedAt" timestamp
);


CREATE TABLE team
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "game" VARCHAR(100),
    "logo" VARCHAR(255),
    "createdAt" timestamp,
    "updatedAt" timestamp
);

CREATE TABLE player
(
    "id" SERIAL PRIMARY KEY,
    "pseudo" VARCHAR(100) NOT NULL,
    "logo" VARCHAR(255),
	"team_id" INTEGER REFERENCES team(id),
    "arrivingDate" timestamp,
    "createdAt" timestamp,
    "updatedAt" timestamp
);

CREATE TABLE event
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "type" VARCHAR(20),
    "type_id" INTEGER,
    "details" TEXT,
	"date" timestamp,
    "createdAt" timestamp,
    "updatedAt" timestamp
);

CREATE TABLE match
(
    "id" SERIAL PRIMARY KEY,
	"equipe1" VARCHAR(100) NOT NULL,
	"equipe2" VARCHAR(100) NOT NULL,
	"score1" INTEGER,
	"score2" INTEGER,
    "vainqueur" VARCHAR(100),
    "event_id" INTEGER REFERENCES event(id),
    "createdAt" timestamp,
    "updatedAt" timestamp
);

CREATE TABLE partner
(
    "id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"description" TEXT,
	"logo" VARCHAR(255) NOT NULL,
	"link" VARCHAR(255) NOT NULL,
    "createdAt" timestamp,
    "updatedAt" timestamp
);