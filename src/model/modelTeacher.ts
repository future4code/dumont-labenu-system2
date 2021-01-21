import dataBase from "../config/dataBase"

export const insertTeacher = async (name: string, email: string, birthdate: string, speciality: string): Promise<any> => {

    try {
        await dataBase
            .insert({
                id: Date.now(),
                name,
                email,
                birthdate,
                speciality
            })
            .into("Teacher");

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}

export const selectTeachersByMission = async (id: string): Promise<any> => {

    try {
        const result = await dataBase.raw(`
            SELECT Teacher.id AS teacher_id, Teacher.name AS teacher_name,
            Teacher.mission_id, Mission.name AS mission_name
            FROM Teacher
            JOIN Mission on Teacher.mission_id = Mission.id
            WHERE Teacher.mission_id = "${id}";
        `)

        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}   

export const removeTeacherFromMission = async (id: string): Promise<any> => {

    try {
        await dataBase.raw(`
            UPDATE Teacher SET mission_id=null WHERE id = "${id}";
        `)

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}