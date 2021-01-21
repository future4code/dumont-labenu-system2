import { Response, Request } from "express"
import { insertStudent, selectAgeById, selectStudentByMission, deleteStudentsById, removeStudentFromMission, changeStudentFromMission, getAllStudents } from "../model/modelStudents"
import { formatStringDate } from "../util/convertData"


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

        if (!id) {
            res.statusCode = 404
            throw new Error("Informe um ID para busca do estudante!")
        }

        const result = await selectAgeById(id) as string

        if (!result) {
            res.statusCode = 404
            throw new Error("Estudante não encontrado!")
        }

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }
}

export const getStudentsByMission = async (req: Request, res: Response): Promise<any> => {

    try {
        const id = req.query.id as string

        if (!id) {
            res.statusCode = 404
            throw new Error("Informe um ID da turma para exibir estudantes!")
        }

        const result = await selectStudentByMission(id)

        if (!result.length) {
            res.statusCode = 404
            throw new Error("Não foram encontrados estudantes para o ID informado!")
        }

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }
}

export const deleteStudents = async (req: Request, res: Response): Promise<any> => {

    try {
        const id = req.params.id as string

        if (!id) {
            res.statusCode = 404
            throw new Error("Informe o ID do estudante para apagar!")
        }

        await deleteStudentsById(id)

        res.status(200).send({ message: "Estudante deletado com sucesso!" })

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }
}

export const removeStudent = async (req: Request, res: Response): Promise<any> => {

    try {
        const id = req.params.id as string

        if (!id) {
            res.statusCode = 404
            throw new Error("Informe o ID do estudante para remover da turma!")
        }

        await removeStudentFromMission(id)

        res.status(200).send({ message: "Estudante removido da turma com sucesso!" })

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }
}


export const putStudentsMission = async (req: Request, res: Response): Promise<any> => {

    try {

        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "")
                return res.send("Por gentileza preencha todos os campos!")
        }

        const { mission_id, id } = req.body

        const compareStudetsId = await getAllStudents()

        const filterStudentsId = compareStudetsId.filter((student:any) => {
            return student.id === id            
        })

        if(!filterStudentsId.length){
            res.status(404).send({ message: "Estudante não encontrado para esse Id" })
        }
        

        await changeStudentFromMission(id, mission_id)


        res.status(200).send({message: "Estudante alterado de turma com sucesso!"})

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }
}