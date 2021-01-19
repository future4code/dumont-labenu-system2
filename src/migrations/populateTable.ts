import dataBase from "../config/dataBase"

const populateStudent = async (): Promise<void> => {
    try {
        await dataBase.raw(`
   INSERT INTO Student(id, name, email, birthdate, hobby)
   VALUES   
   ('1', 'João', 'joao@email.com', '1990-12-01', 'mascar chiclete'),
   ('2', 'Maria', 'maria@email.com', '1988-03-14', 'fazer barulho com sovaco');

`);
        populateTeacher()
        console.log("Dados inseridos nas tabelas com sucesso!")

    } catch (error) {
        dataBase.destroy()
        throw new Error(error.sqlMessage || error.message)
    }
}
populateStudent()


const populateTeacher = async (): Promise<void> => {
    try {
        await dataBase.raw(`
        INSERT INTO Teacher(id, name, email, birthdate, speciality)
        VALUES
        ('3', 'Mateus', 'mateus@email.com', '1980-06-10', 'Backend'),
        ('4', 'Chijo', 'chijo@email.com', '1981-03-14', 'React');
     
`);
        populateMission()
        console.log("Dados inseridos nas tabelas com sucesso!")

    } catch (error) {
        dataBase.destroy()
        throw new Error(error.sqlMessage || error.message)
    }
}


const populateMission = async (): Promise<void> => {
    try {
        await dataBase.raw(`
   INSERT INTO Mission(id, name, startdate, finishdate, module, type, teacher_id, student_id)
   VALUES   
   ('1', 'Dumont', '2019-06-01', '2021-04-01', '4', 'whole class', '3', '1'),
   ('2', 'Jackson', '2019-01-04', '2020-07-30', '7', 'night class', '4', '2');
`);

        console.log("Tabela mission criado com sucesso!")

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}