import express, { Response, Request } from "express"
import { insertMission, insertStudent, insertTeacher } from "../model/modelMission"
import { formatStringDate } from "../util/convertData"


export const createMission = async (req: Request, res: Response): Promise<any> => {

    try {
        let itemsKeys: Array<string> = []

        let keys = Object.keys(req.body)
        if (keys.length > 0) {
            itemsKeys = keys.splice(5, 2)
        }


        for (const key of itemsKeys) {
            if (req.body[key] == "")
                return res.send("Por gentileza preencha todos os campos!")
        }


        const { name, startdate, finishdate, module, type } = req.body
        const convertStartdate = formatStringDate(startdate)
        const convertFinishdate = formatStringDate(finishdate)

        await insertMission(name, convertStartdate, convertFinishdate, module, type) as string

        res.status(200).send("Turma inserida com sucesso!")

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }
}

export const createStudentMission = async (req: Request, res: Response): Promise<any> => {

    try {
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "")
                return res.send("Por gentileza preencha todos os campos!")
        }

        const { mission_id, id } = req.body

        await insertStudent(mission_id, id) as string

        res.status(200).send(`Aluno ${mission_id} inserido na turma ${id}!`)

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }
}

export const createTeacherMission = async (req: Request, res: Response): Promise<any> => {

    try {
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "")
                return res.send("Por gentileza preencha todos os campos!")
        }

        const { mission_id, id } = req.body

        await insertTeacher(mission_id, id) as string

        res.status(200).send(`Professor ${mission_id} inserido na turma ${id}!`)

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }
}
