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
export const updateAnnouncementValidation = createAnnouncementValidation.concat(
  getAnnouncementValidation,
);
export const deleteAnnouncementValidation = getAnnouncementValidation;
