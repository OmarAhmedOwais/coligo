import { Document } from 'mongoose';
export interface IAnnouncement extends Document {
  user: {
    name: string;
    role: string;
    image: string;
    courseName: string;
    department: string;
  };
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
