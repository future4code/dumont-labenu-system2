import dataBase from "../config/dataBase"

export const insertMission = async (name: string, startdate: string, finishdate: string, module: string, type: string): Promise<any> => {

    try {
        await dataBase
            .insert({
                id: Date.now(),
                name,
                startdate,
                finishdate,
                module,
                type
            })
            .into("Mission");

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}

export const insertStudent = async (mission_id: string, id: string): Promise<any> => {

    try {
        await dataBase.raw (`
            UPDATE Student
            SET mission_id = ${mission_id}
            WHERE id = ${id}
        `)
            

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}

export const insertTeacher = async (mission_id: string, id: string): Promise<any> => {

    try {
        await dataBase.raw (`
            UPDATE Teacher
            SET mission_id = ${mission_id}
            WHERE id = ${id}
        `)
            

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}



