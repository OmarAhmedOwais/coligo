import { Router } from 'express';

import announcementRouter from './src/routes/announcement.router';
import examRouter from './src/routes/exam.router';

const router = Router();

router.use('/announcements', announcementRouter);
router.use('/exams', examRouter);

export default router;
