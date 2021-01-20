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
       const result =  await dataBase.raw (`
       SELECT name, FLOOR(DATEDIFF(CURDATE(), birthdate)/365) AS age
       FROM Student
       WHERE id = "${id}";
       `)

       return result[0][0]
          
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}



    
