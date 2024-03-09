import { Schema, model } from 'mongoose';

import { IExam } from '../interfaces/exam/exam.interface';

const examSchema = new Schema<IExam>(
  {
    title: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    sections: [
      {
        title: String,
        description: String,
        marks: Number,
        subsections: [
          {
            title: String,
            description: String,
            marks: Number,
          },
        ],
      },
    ],
    totalMarks: {
      type: Number,
      required: true,
    },
    instructions: String,
    contentDistribution: [
      {
        sectionTitle: String,
        percentage: Number,
      },
    ],
    recommendedStudyMaterial: [String],
    scoringCriteria: String,
    sampleQuestions: [String],
    additionalNotes: String,
  },
  {
    timestamps: true,
  },
);

export const Exam = model<IExam>('Exam', examSchema);
