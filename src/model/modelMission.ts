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

export const insertStudent = async (student_id: string, id: string): Promise<any> => {

    try {
        await dataBase.raw (`
            UPDATE Mission
            SET student_id = ${student_id}
            WHERE id = ${id}
        `)
            

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}

