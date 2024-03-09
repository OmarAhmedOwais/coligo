import { Router } from 'express';

import {
  createExam,
  deleteExam,
  getAllExams,
  getExam,
  updateExam,
} from '../controllers/exam.controller';
import { solveExam } from '../controllers/examSolve.controller';
import {
  createExamValidation,
  deleteExamValidation,
  getExamValidation,
  solveExamValidation,
  updateExamValidation,
  getAllExamValidation,
} from '../validations/exam.validator';

const examRouter = Router();

examRouter
  .route('/')
  .post(createExamValidation, createExam)
  .get(getAllExamValidation, getAllExams);
examRouter.route('/:id/solve').post(solveExamValidation, solveExam);
examRouter
  .route('/:id')
  .get(getExamValidation, getExam)
  .put(updateExamValidation, updateExam)
  .delete(deleteExamValidation, deleteExam);

export default examRouter;
