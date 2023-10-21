CREATE DATABASE dbtreinos;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
)

-- CREATE TABLE treino(
--     id SERIAL PRIMARY KEY,
--     nometreino VARCHAR(255) NOT NULL,
--     diatreino VARCHAR(255) NOT NULL,
--     iduser INTEGER NOT NULL,
--     FOREIGN KEY(iduser) REFERENCES users(id)
-- )