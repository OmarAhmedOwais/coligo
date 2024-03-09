import { Document, ObjectId } from 'mongoose';

export interface ISubsection {
  _id: ObjectId;
  title: string;
  description: string;
  marks: number;
}

interface ISection {
  title: string;
  description: string;
  marks: number;
  subsections: ISubsection[];
}

export interface IExam extends Document {
  title: string;
  duration: number;
  sections: ISection[];
  totalMarks: number;
  instructions?: string;
  contentDistribution: { sectionTitle: string; percentage: number }[];
  recommendedStudyMaterial: string[];
  scoringCriteria?: string;
  sampleQuestions: string[];
  additionalNotes?: string;
}
