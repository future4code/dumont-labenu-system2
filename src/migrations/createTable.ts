import dataBase from "../config/dataBase"

const createTables = async (): Promise<void> => {

    try {

        await dataBase.raw(`
        CREATE TABLE Mission(
             id VARCHAR(20) PRIMARY KEY NOT NULL, 
             name VARCHAR(60) NOT NULL, 
             startdate DATE NOT NULL,
             finishdate DATE NOT NULL,
             module ENUM ('1', '2', '3', '4', '5', '6', '7', 'undefined') DEFAULT "undefined",
             type ENUM ("whole class", "night class")
        );
        `)

        await dataBase.raw(`
        CREATE TABLE Student(
            id VARCHAR(255) PRIMARY KEY NOT NULL, 
            name VARCHAR(60) NOT NULL, 
            email VARCHAR(50) UNIQUE NOT NULL, 
            birthdate DATE NOT NULL,
            hobby VARCHAR(255) NULL,
            mission_id VARCHAR(20) UNIQUE NULL,
            FOREIGN KEY (mission_id) REFERENCES Mission(id)
        );
         `)

        await dataBase.raw(`
        CREATE TABLE Teacher(
            id VARCHAR(20) PRIMARY KEY NOT NULL, 
            name VARCHAR(60) NOT NULL, 
            email VARCHAR(50) UNIQUE NOT NULL,
            birthdate DATE NOT NULL,
            speciality ENUM ("React", "Redux", "CSS", "Testes", "Typescript", "Programação Orientada a Objetos", "Backend"),
            mission_id VARCHAR(20) UNIQUE NULL,
            FOREIGN KEY (mission_id) REFERENCES Mission(id)
        );
        `)



        console.log("tables created successfully")

        dataBase.destroy()

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }

}
createTables()