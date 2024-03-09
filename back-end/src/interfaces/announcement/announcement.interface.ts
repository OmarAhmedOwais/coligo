import { Document } from 'mongoose';
export interface IAnnouncement extends Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
