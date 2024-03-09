import { Schema, model } from 'mongoose';

import { IModelAnswer } from '../types/interfaces/exam/modelAnswer.interface';

// Define Model Answer Schema
const modelAnswerSchema: Schema = new Schema<IModelAnswer>({
  examId: {
    type: Schema.Types.ObjectId,
    ref: 'Exam', // Reference to the Exam model
    required: true,
  },
  subsectionId: {
    type: Schema.Types.ObjectId,
    ref: 'Subsection', // Reference to the Subsection model
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

// Create Model Answer model
const ModelAnswer = model<IModelAnswer>('ModelAnswer', modelAnswerSchema);

export { ModelAnswer, IModelAnswer };
