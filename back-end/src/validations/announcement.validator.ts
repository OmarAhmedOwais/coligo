// Package NPM Import
import { body, param } from 'express-validator';

// Middleware Import
import { validate } from '../middlewares/validation.middleware';

export const geAllAnnouncementValidation = [validate];

export const getAnnouncementValidation = [
  param('id').isMongoId().withMessage({
    en: 'Invalid Announcement Id',
    ar: 'رقم الإعلان غير صالح',
  }),
  validate,
];
export const createAnnouncementValidation = [
  body('user').isObject().withMessage({
    en: 'User Must Be An Object',
    ar: 'يجب أن يكون المستخدم كائن',
  }),
  body('user.name').isString().withMessage({
    en: 'Name Must Be A String',
    ar: 'يجب أن يكون الاسم سلسلة نصية',
  }),
  body('user.role').isString().withMessage({
    en: 'Role Must Be A String',
    ar: 'يجب أن يكون الدور سلسلة نصية',
  }),
  body('user.image').isString().withMessage({
    en: 'Image Must Be A String',
    ar: 'يجب أن تكون الصورة سلسلة نصية',
  }),
  body('user.courseName').isString().withMessage({
    en: 'Course Name Must Be A String',
    ar: 'يجب أن يكون اسم الدورة سلسلة نصية',
  }),
  body('user.department').isString().withMessage({
    en: 'Department Must Be A String',
    ar: 'يجب أن يكون القسم سلسلة نصية',
  }),
  body('title').isString().withMessage({
    en: 'Title Must Be A String',
    ar: 'يجب أن يكون العنوان سلسلة نصية',
  }),
  body('content').isString().withMessage({
    en: 'Content Must Be A String',
    ar: 'يجب أن يكون المحتوى سلسلة نصية',
  }),
  validate,
];
export const updateAnnouncementValidation = [
  param('id').isMongoId().withMessage({
    en: 'Invalid Announcement Id',
    ar: 'رقم الإعلان غير صالح',
  }),
  body('user').optional().isObject().withMessage({
    en: 'User Must Be An Object',
    ar: 'يجب أن يكون المستخدم كائن',
  }),
  body('user.name').optional().isString().withMessage({
    en: 'Name Must Be A String',
    ar: 'يجب أن يكون الاسم سلسلة نصية',
  }),
  body('user.role').optional().isString().withMessage({
    en: 'Role Must Be A String',
    ar: 'يجب أن يكون الدور سلسلة نصية',
  }),
  body('user.image').optional().isString().withMessage({
    en: 'Image Must Be A String',
    ar: 'يجب أن تكون الصورة سلسلة نصية',
  }),
  body('user.courseName').optional().isString().withMessage({
    en: 'Course Name Must Be A String',
    ar: 'يجب أن يكون اسم الدورة سلسلة نصية',
  }),
  body('user.department').optional().isString().withMessage({
    en: 'Department Must Be A String',
    ar: 'يجب أن يكون القسم سلسلة نصية',
  }),
  body('title').optional().isString().withMessage({
    en: 'Title Must Be A String',
    ar: 'يجب أن يكون العنوان سلسلة نصية',
  }),
  body('content').optional().isString().withMessage({
    en: 'Content Must Be A String',
    ar: 'يجب أن يكون المحتوى سلسلة نصية',
  }),
  validate,
];
export const deleteAnnouncementValidation = getAnnouncementValidation;
