import { Announcement } from '../models/announcement.model';

import {
  getAllItems,
  createNewItem,
  deleteOneItemById,
  getOneItemById,
  updateOneItemById,
} from './factory.controller';

// @desc    Get all Announcement
// @route   GET /api/v1/announcements
// @access  Public
export const getAllAnnouncement = getAllItems(Announcement);

// @desc    Get one Announcement
// @route   GET /api/v1/announcements/:id
// @access  Public
export const getAnnouncement = getOneItemById(Announcement);

// @desc    Create new Announcement
// @route   POST /api/v1/announcements
// @access  Private (Admin)
export const createAnnouncement = createNewItem(Announcement);

// @desc    Update Announcement
// @route   PUT /api/v1/announcements/:id
// @access  Private (Admin)
export const updateAnnouncement = updateOneItemById(Announcement);

// @desc    Delete Announcement
// @route   DELETE /api/v1/announcements/:id
// @access  Private (Admin)
export const deleteAnnouncement = deleteOneItemById(Announcement);
