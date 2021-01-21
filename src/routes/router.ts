import express from 'express';

const router = express.Router();

//Controller
import { createMission, createStudentMission, createTeacherMission } from '../controller/missionController';
import { createStudent, getAgeById } from '../controller/studentsController';
import { createTeacher } from '../controller/teacherController';

//Rotas para createStudent, createTeacher, createMission
router.post("/create-student", createStudent);
router.post("/create-teacher", createTeacher);
router.post("/create-mission", createMission);
router.put("/student-mission", createStudentMission);
router.put("/teacher-mission", createTeacherMission);
router.get("/student/:id", getAgeById);

export default router;
