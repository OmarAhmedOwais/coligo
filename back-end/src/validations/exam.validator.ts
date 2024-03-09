// Packages NPM Import
import { body, param } from 'express-validator';
// Middleware Import
import { Request } from 'express';

import { validate } from '../middlewares/validation.middleware';

export const getAllExamValidation = [validate];

export const getExamValidation = [
  param('id').isMongoId().withMessage({
    en: 'Invalid Exam Id',
    ar: 'رقم الإمتحان غير صالح',
  }),
  validate,
];

export const createExamValidation = [
  body('name').isString().withMessage({
    en: 'Name Must Be A String',
    ar: 'يجب أن يكون الاسم سلسلة نصية',
  }),
  body('duration').isNumeric().withMessage({
    en: 'Duration Must Be A Number',
    ar: 'يجب أن يكون المدة رقم',
  }),
  body('questions').isArray().withMessage({
    en: 'Questions Must Be An Array',
    ar: 'يجب أن تكون الأسئلة مصفوفة',
  }),
  validate,
];
const questionValidator = (req: Request): boolean => {
  if (req.body.questions) {
    req.body.questions.forEach((question: any) => {
      if (question.type === 'MCQ') {
        if (!question.choices || question.choices.length < 2) {
          throw new Error('MCQ Question Must Have At Least 2 Choices');
        }
      }
    });
  }
  return true;
};

export const updateExamQuestion = [...getExamValidation, questionValidator];
export const updateExamValidation =
  createExamValidation.concat(getExamValidation);
export const deleteExamValidation = getExamValidation;

export const solveExamValidation = [
  param('id').isMongoId().withMessage({
    en: 'Invalid Exam Id',
    ar: 'رقم الإمتحان غير صالح',
  }),
  body('answers').isArray().withMessage({
    en: 'Answers Must Be An Array',
    ar: 'يجب أن تكون الإجابات مصفوفة',
  }),
  validate,
];
