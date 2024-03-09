import { Exam } from '../models/exam.model';

import {
  getAllItems,
  createNewItem,
  deleteOneItemById,
  getOneItemById,
  updateOneItemById,
} from './factory.controller';

// @desc    Get all Exam
// @route   GET /api/v1/exams
// @access  Public
export const getAllExams = getAllItems(Exam);

// @desc    Get one Exam
// @route   GET /api/v1/announcements/:id
// @access  Public
export const getExam = getOneItemById(Exam);

// @desc    Create new Exam
// @route   POST /api/v1/announcements
// @access  Private (Admin)
export const createExam = createNewItem(Exam);

// @desc    Update Exam
// @route   PUT /api/v1/announcements/:id
// @access  Private (Admin)
export const updateExam = updateOneItemById(Exam);

// @desc    Delete Exam
// @route   DELETE /api/v1/announcements/:id
// @access  Private (Admin)
export const deleteExam = deleteOneItemById(Exam);
