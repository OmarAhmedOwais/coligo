import mongoose, { Document } from 'mongoose';

// Interface for Model Answer
export interface IModelAnswer extends Document {
  examId: mongoose.Types.ObjectId; // Reference to Exam ID
  subsectionId: mongoose.Types.ObjectId; // Reference to Subsection ID
  answer: string;
}
