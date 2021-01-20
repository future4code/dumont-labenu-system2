import express from 'express';
import { createMission, createStudentMission } from '../controller/missionController';
const router = express.Router();

//Controller
import { createStudent } from '../controller/studentsController';
import { createTeacher } from '../controller/teacherController';

//Rotas para createStudent, createTeacher, createMission
router.post("/create-student", createStudent);
router.post("/create-teacher", createTeacher);
router.post("/create-mission", createMission);
router.put("/student-mission", createStudentMission);

export default router;
