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

    