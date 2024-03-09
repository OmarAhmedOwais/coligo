import { Router } from 'express';

import {
  createAnnouncement,
  getAllAnnouncement,
  getAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from '../controllers/announcement.controller';
import {
  geAllAnnouncementValidation,
  createAnnouncementValidation,
  getAnnouncementValidation,
  updateAnnouncementValidation,
  deleteAnnouncementValidation,
} from '../validations/announcement.validator';

const announcementRouter = Router();

announcementRouter
  .route('/')
  .post(createAnnouncementValidation, createAnnouncement)
  .get(geAllAnnouncementValidation, getAllAnnouncement);
announcementRouter
  .route('/:id')
  .get(getAnnouncementValidation, getAnnouncement)
  .put(updateAnnouncementValidation, updateAnnouncement)
  .delete(deleteAnnouncementValidation, deleteAnnouncement);

export default announcementRouter;
