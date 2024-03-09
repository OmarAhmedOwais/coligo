import { Schema, model } from 'mongoose';

import { IAnnouncement } from '../types/interfaces/announcement/announcement.interface';

const announcementSchema = new Schema<IAnnouncement>(
  {
    user: {
      name: {
        type: String,
      },
      role: {
        type: String,
      },
      image: {
        type: String,
      },
      courseName: {
        type: String,
      },
      department: {
        type: String,
      },
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Announcement = model<IAnnouncement>(
  'Announcement',
  announcementSchema,
);
