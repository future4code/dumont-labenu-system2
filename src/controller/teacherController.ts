import express, { Response, Request } from "express"
import { insertTeacher, selectTeachersByMission } from "../model/modelTeacher"
import { formatStringDate } from "../util/convertData"


export const createTeacher = async (req: Request, res: Response): Promise<any> => {

    try {
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "")
                return res.send("Por gentileza preencha todos os campos!")
        }
        const { name, email, birthdate, speciality } = req.body
        const convertBirthdate = formatStringDate(birthdate)

        await insertTeacher(name, email, convertBirthdate, speciality) as string

        res.status(200).send("Professor inserido com sucesso!")

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }
}

export const getTeachersByMission = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.query.id as string

        if (!id) {
            res.statusCode = 404
            throw new Error("Informe um ID da turma para exibir professores!")
        }

        const result = await selectTeachersByMission(id)

        if (!result.length) {
            res.statusCode = 404
            throw new Error("Não foram encontrados professores para o ID informado!")
        }

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }
}
