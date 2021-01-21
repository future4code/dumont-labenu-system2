import express, { Response, Request } from "express"
import { insertStudent, selectAgeById } from "../model/modelStudents"
import { age, formatStringDate } from "../util/convertData"


export const createStudent = async (req: Request, res: Response): Promise<any> => {

    try {
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "")
                return res.send("Por gentileza preencha todos os campos!")
        }
        const { name, email, birthdate, hobby } = req.body
        const convertBirthdate = formatStringDate(birthdate)

        await insertStudent(name, email, convertBirthdate, hobby) as string

        res.status(200).send("Estudante inserido com sucesso!")

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }
}



export const getAgeById = async (req: Request, res: Response): Promise<any> => {

    try {
        const id = req.params.id

        const result = await selectAgeById(id) as string

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }
}

