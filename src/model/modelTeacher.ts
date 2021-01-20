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

    
