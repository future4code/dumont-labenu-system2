import dataBase from "../config/dataBase"

const createTables = async (): Promise<void> => {

    try {
        await dataBase.raw(`
        CREATE TABLE Student(
            id VARCHAR(255) PRIMARY KEY NOT NULL, 
            name VARCHAR(60) NOT NULL, 
            email VARCHAR(50) UNIQUE NOT NULL, 
            birthdate DATE NOT NULL,
            hobby VARCHAR(255) NULL
        )
         `)

        await dataBase.raw(`
        CREATE TABLE Teacher(
            id VARCHAR(20) PRIMARY KEY NOT NULL, 
            name VARCHAR(60) NOT NULL, 
            email VARCHAR(50) UNIQUE NOT NULL,
            birthdate DATE NOT NULL,
            speciality ENUM ("React", "Redux", "CSS", "Testes", "Typescript", "Programação Orientada a Objetos", "Backend")
        )
        `)

        await dataBase.raw(`
        CREATE TABLE Mission(
             id VARCHAR(20) PRIMARY KEY NOT NULL, 
             name VARCHAR(60) NOT NULL, 
             startdate DATE NOT NULL,
             finishdate DATE NOT NULL,
             module ENUM ('1', '2', '3', '4', '5', '6', '7') NULL,
             type ENUM ("whole class", "night class"),
             teacher_id VARCHAR(60) UNIQUE NULL,
             student_id VARCHAR(60) UNIQUE NULL,
             FOREIGN KEY (teacher_id) REFERENCES Teacher(id),
             FOREIGN KEY (student_id) REFERENCES Student(id)
        );
        `)

        console.log("tables created successfully")

        dataBase.destroy()

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }

}
createTables()