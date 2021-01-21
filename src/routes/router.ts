import express from 'express';

const router = express.Router();

//Controller
import { createMission, createStudentMission, createTeacherMission } from '../controller/missionController';
import { createStudent, getAgeById, getStudentsByMission, deleteStudents, removeStudent } from '../controller/studentsController';
import { createTeacher, getTeachersByMission, removeTeacher } from '../controller/teacherController';

//Rotas para createStudent, createTeacher, createMission
router.post("/create-student", createStudent);
router.post("/create-teacher", createTeacher);
router.post("/create-mission", createMission);
router.put("/student-mission", createStudentMission);
router.put("/teacher-mission", createTeacherMission);
router.get("/student/:id", getAgeById);
router.get("/students", getStudentsByMission);
router.get("/teachers", getTeachersByMission);
router.delete("/student-delete/:id", deleteStudents);
router.put("/student-remove-mission/:id", removeStudent);
router.put("/teacher-remove-mission/:id", removeTeacher);

export default router;
