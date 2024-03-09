import { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { StatusCodes } from 'http-status-codes';

import { Exam } from '../models/exam.model';
import { ModelAnswer } from '../models/modelAnswer.model';
import { IExam } from '../interfaces/exam/exam.interface';
import { IModelAnswer } from '../interfaces/exam/modelAnswer.interface';
import { Status } from '../interfaces/status/status.enum';
import ApiError from '../utils/ApiError';
import { calculateTotalMarks } from '../utils/calculateMarks';

// @desc    Solve Exam
// @route   POST /api/v1/exams/:id/solve
// @access  Private (User)
export const solveExam = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const { answers } = req.body;

    // Fetch the exam from the database
    const exam: IExam | null = await Exam.findById(id);

    // Check if the exam exists
    if (!exam) {
      return next(
        new ApiError(
          {
            en: `Not Found Any Result For This Id ${id}`,
            ar: `${id}لا يوجداي نتيجة لهذا`,
          },
          StatusCodes.NOT_FOUND,
        ),
      );
    }

    // Fetch model answers for the exam
    const modelAnswers: IModelAnswer[] = await ModelAnswer.find({ id });

    // Calculate total marks
    const totalMarks = calculateTotalMarks(exam, modelAnswers, answers);

    res.status(StatusCodes.OK).json({
      status: Status.SUCCESS,
      data: totalMarks,
      success_en: 'Solved Successfully',
      success_ar: 'تم الحل بنجاح',
    });
  },
);
