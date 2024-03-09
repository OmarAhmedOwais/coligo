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
  body('title').isString().withMessage({
    en: 'Title Must Be A String',
    ar: 'يجب أن يكون العنوان سلسلة نصية',
  }),
  body('duration').isNumeric().withMessage({
    en: 'Duration Must Be A Number',
    ar: 'يجب أن يكون المدة رقم',
  }),
  body('sections').isArray().withMessage({
    en: 'Sections Must Be An Array',
    ar: 'يجب أن تكون الأقسام مصفوفة',
  }),
  body('sections.*.title').isString().withMessage({
    en: 'Section Title Must Be A String',
    ar: 'يجب أن يكون عنوان القسم سلسلة نصية',
  }),
  body('sections.*.description').isString().withMessage({
    en: 'Section Description Must Be A String',
    ar: 'يجب أن تكون وصف القسم سلسلة نصية',
  }),
  body('sections.*.marks').isNumeric().withMessage({
    en: 'Section Marks Must Be A Number',
    ar: 'يجب أن تكون علامات القسم رقم',
  }),
  body('sections.*.subsections').isArray().withMessage({
    en: 'Subsections Must Be An Array',
    ar: 'يجب أن تكون القسائم الفرعية مصفوفة',
  }),
  body('sections.*.subsections.*.title').isString().withMessage({
    en: 'Subsection Title Must Be A String',
    ar: 'يجب أن يكون عنوان القسم الفرعي سلسلة نصية',
  }),
  body('sections.*.subsections.*.description').isString().withMessage({
    en: 'Subsection Description Must Be A String',
    ar: 'يجب أن تكون وصف القسم الفرعي سلسلة نصية',
  }),
  body('sections.*.subsections.*.marks').isNumeric().withMessage({
    en: 'Subsection Marks Must Be A Number',
    ar: 'يجب أن تكون علامات القسم الفرعي رقم',
  }),
  body('totalMarks').isNumeric().withMessage({
    en: 'Total Marks Must Be A Number',
    ar: 'يجب أن تكون العلامات الكلية رقم',
  }),
  body('instructions').optional().isString().withMessage({
    en: 'Instructions Must Be A String',
    ar: 'يجب أن تكون التعليمات سلسلة نصية',
  }),
  body('contentDistribution').optional().isArray().withMessage({
    en: 'Content Distribution Must Be An Array',
    ar: 'يجب أن تكون توزيع المحتوى مصفوفة',
  }),
  body('contentDistribution.*.sectionTitle').isString().withMessage({
    en: 'Content Distribution Section Title Must Be A String',
    ar: 'يجب أن يكون عنوان قسم توزيع المحتوى سلسلة نصية',
  }),
  body('contentDistribution.*.percentage').isNumeric().withMessage({
    en: 'Content Distribution Percentage Must Be A Number',
    ar: 'يجب أن يكون نسبة توزيع المحتوى رقم',
  }),
  body('recommendedStudyMaterial').optional().isArray().withMessage({
    en: 'Recommended Study Material Must Be An Array',
    ar: 'يجب أن يكون المواد الدراسية الموصى بها مصفوفة',
  }),
  body('recommendedStudyMaterial.*').isString().withMessage({
    en: 'Recommended Study Material Must Be A String',
    ar: 'يجب أن تكون المواد الدراسية الموصى بها سلسلة نصية',
  }),
  body('scoringCriteria').optional().isString().withMessage({
    en: 'Scoring Criteria Must Be A String',
    ar: 'يجب أن يكون معايير التقييم سلسلة نصية',
  }),
  body('sampleQuestions').optional().isArray().withMessage({
    en: 'Sample Questions Must Be An Array',
    ar: 'يجب أن تكون الأسئلة النموذجية مصفوفة',
  }),
  body('sampleQuestions.*').isString().withMessage({
    en: 'Sample Question Must Be A String',
    ar: 'يجب أن تكون السؤال النموذجي سلسلة نصية',
  }),
  body('additionalNotes').optional().isString().withMessage({
    en: 'Additional Notes Must Be A String',
    ar: 'يجب أن تكون الملاحظات الإضافية سلسلة نصية',
  }),
  validate,
];

const questionValidator = (req: Request): boolean => {
  if (req.body.sections) {
    req.body.sections.forEach((section: any) => {
      if (section.subsections) {
        section.subsections.forEach((subsection: any) => {
          if (
            !subsection.title ||
            !subsection.description ||
            !subsection.marks
          ) {
            throw new Error('Subsection Data is Incomplete');
          }
        });
      }
      if (
        !section.title ||
        !section.description ||
        !section.marks ||
        !section.subsections ||
        !Array.isArray(section.subsections)
      ) {
        throw new Error('Section Data is Incomplete');
      }
    });
  }
  return true;
};

export const updateExamQuestion = [...getExamValidation, questionValidator];
export const updateExamValidation = [
  param('id').isMongoId().withMessage({
    en: 'Invalid Exam Id',
    ar: 'رقم الإمتحان غير صالح',
  }),
  body('title').optional().isString().withMessage({
    en: 'Title Must Be A String',
    ar: 'يجب أن يكون العنوان سلسلة نصية',
  }),
  body('duration').optional().isNumeric().withMessage({
    en: 'Duration Must Be A Number',
    ar: 'يجب أن يكون المدة رقم',
  }),
  body('sections').optional().isArray().withMessage({
    en: 'Sections Must Be An Array',
    ar: 'يجب أن تكون الأقسام مصفوفة',
  }),
  body('sections.*.title').optional().isString().withMessage({
    en: 'Section Title Must Be A String',
    ar: 'يجب أن يكون عنوان القسم سلسلة نصية',
  }),
  body('sections.*.description').optional().isString().withMessage({
    en: 'Section Description Must Be A String',
    ar: 'يجب أن تكون وصف القسم سلسلة نصية',
  }),
  body('sections.*.marks').optional().isNumeric().withMessage({
    en: 'Section Marks Must Be A Number',
    ar: 'يجب أن تكون علامات القسم رقم',
  }),
  body('sections.*.subsections').optional().isArray().withMessage({
    en: 'Subsections Must Be An Array',
    ar: 'يجب أن تكون القسائم الفرعية مصفوفة',
  }),
  body('sections.*.subsections.*.title').optional().isString().withMessage({
    en: 'Subsection Title Must Be A String',
    ar: 'يجب أن يكون عنوان القسم الفرعي سلسلة نصية',
  }),
  body('sections.*.subsections.*.description')
    .optional()
    .isString()
    .withMessage({
      en: 'Subsection Description Must Be A String',
      ar: 'يجب أن تكون وصف القسم الفرعي سلسلة نصية',
    }),
  body('sections.*.subsections.*.marks').optional().isNumeric().withMessage({
    en: 'Subsection Marks Must Be A Number',
    ar: 'يجب أن تكون علامات القسم الفرعي رقم',
  }),
  body('totalMarks').optional().isNumeric().withMessage({
    en: 'Total Marks Must Be A Number',
    ar: 'يجب أن تكون العلامات الكلية رقم',
  }),
  body('instructions').optional().isString().withMessage({
    en: 'Instructions Must Be A String',
    ar: 'يجب أن تكون التعليمات سلسلة نصية',
  }),
  body('contentDistribution').optional().isArray().withMessage({
    en: 'Content Distribution Must Be An Array',
    ar: 'يجب أن تكون توزيع المحتوى مصفوفة',
  }),
  body('contentDistribution.*.sectionTitle').isString().withMessage({
    en: 'Content Distribution Section Title Must Be A String',
    ar: 'يجب أن يكون عنوان قسم توزيع المحتوى سلسلة نصية',
  }),
  body('contentDistribution.*.percentage').isNumeric().withMessage({
    en: 'Content Distribution Percentage Must Be A Number',
    ar: 'يجب أن يكون نسبة توزيع المحتوى رقم',
  }),
  body('recommendedStudyMaterial').optional().isArray().withMessage({
    en: 'Recommended Study Material Must Be An Array',
    ar: 'يجب أن يكون المواد الدراسية الموصى بها مصفوفة',
  }),
  body('recommendedStudyMaterial.*').isString().withMessage({
    en: 'Recommended Study Material Must Be A String',
    ar: 'يجب أن تكون المواد الدراسية الموصى بها سلسلة نصية',
  }),
  body('scoringCriteria').optional().isString().withMessage({
    en: 'Scoring Criteria Must Be A String',
    ar: 'يجب أن يكون معايير التقييم سلسلة نصية',
  }),
  body('sampleQuestions').optional().isArray().withMessage({
    en: 'Sample Questions Must Be An Array',
    ar: 'يجب أن تكون الأسئلة النموذجية مصفوفة',
  }),
  body('sampleQuestions.*').isString().withMessage({
    en: 'Sample Question Must Be A String',
    ar: 'يجب أن تكون السؤال النموذجي سلسلة نصية',
  }),
  body('additionalNotes').optional().isString().withMessage({
    en: 'Additional Notes Must Be A String',
    ar: 'يجب أن تكون الملاحظات الإضافية سلسلة نصية',
  }),
  validate,
];
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
