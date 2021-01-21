import dataBase from "../config/dataBase"

export const insertStudent = async (name: string, email: string, birthdate: string, hobby: string): Promise<any> => {

    try {
        await dataBase
            .insert({
                id: Date.now(),
                name,
                email,
                birthdate,
                hobby
            })
            .into("Student");

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}

export const selectAgeById = async (id: string): Promise<any> => {

    try {
        const result = await dataBase.raw(`
            SELECT name, FLOOR(DATEDIFF(CURDATE(), birthdate)/365) AS age
            FROM Student
            WHERE id = "${id}";
        `)

        return result[0][0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}

export const selectStudentByMission = async (id: string): Promise<any> => {

    try {
        const result = await dataBase.raw(`
            SELECT Student.id AS student_id, Student.name AS student_name, Student.mission_id, Mission.name AS mission_name FROM Student
            INNER JOIN Mission on Student.mission_id = Mission.id
            WHERE Student.mission_id = "${id}";
        `)

        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}

export const selectStudentByHobby = async (hobby: string): Promise<any> => {

    try {
        const result = await dataBase.raw(`
        SELECT hobby, id, name  
        FROM Student
        WHERE hobby = '${hobby}'
        GROUP BY hobby, id, name;
        `)

        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}


export const deleteStudentsById = async (id: string): Promise<any> => {

    try {
        await dataBase
            .delete()
            .from("Student")
            .where({ id });

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}

export const removeStudentFromMission = async (id: string): Promise<any> => {

    try {
        await dataBase.raw(`
            UPDATE Student SET mission_id=null WHERE id = "${id}";
        `)

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}

export const changeStudentFromMission = async (id: string, mission_id: string): Promise<any> => {

    try {
        await dataBase.raw(`
            UPDATE Student SET mission_id="${mission_id}" WHERE id = "${id}";
        `)

    } catch (error) {
        throw new Error("Verifique o Id da turma!");
    }
}

export const getAllStudents = async (): Promise<any> => {

    try {
        const result = await dataBase.raw(`
            SELECT * FROM Student            
        `)
        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}








