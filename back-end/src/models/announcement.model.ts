import { Schema, model } from 'mongoose';

import { IAnnouncement } from '../interfaces/announcement/announcement.interface';

const announcementSchema = new Schema<IAnnouncement>(
  {
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
