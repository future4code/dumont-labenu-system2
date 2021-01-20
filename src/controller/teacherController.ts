import express, { Response, Request } from "express"
import { insertTeacher } from "../model/modelTeacher"
import {formatStringDate} from "../util/convertData"


export const createTeacher = async (req: Request, res: Response): Promise<any> => {

    try {
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "") 
            return res.send("Por gentileza preencha todos os campos!")
        }
        const {name, email, birthdate, speciality} = req.body
        const convertBirthdate = formatStringDate(birthdate)

        await insertTeacher(name, email, convertBirthdate, speciality) as string

        res.status(200).send("Professor inserido com sucesso!")

        } catch (error) {
            res.status(400).send({message: error.message});
            console.log(error.sqlMessage || error.message);
        }
    }
