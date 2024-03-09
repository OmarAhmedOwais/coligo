import http from 'http';

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config({ path: './config/config.env' });
import morgan from 'morgan';
import { StatusCodes } from 'http-status-codes';
import expressAsyncHandler from 'express-async-handler';

import db_connection from './src/config/db_connection';
import router from './mount';
import 'colors';
import { globalErrorMiddleware } from './src/middlewares/globalError.middleware';
import { rateLimitMiddleware } from './src/middlewares/rateLimit.middleware';
import ApiError from './src/utils/ApiError';

export const app = express();
const server = http.createServer(app);

const NODE_ENV = process.env.NODE_ENV || 'dev';

if (NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

db_connection();

const PORT = process.env.PORT || 3000;
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static('./uploads'));
app.use(rateLimitMiddleware); //  apply to all requests
// routes
app.use('/api/v1', router);

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  }),
);

// un handled routes (not found)
app.use(
  '*',
  expressAsyncHandler(async (req, res, next) => {
    next(
      new ApiError(
        {
          en: `this path ${req.originalUrl} not found`,
          ar: `هذا المسار ${req.originalUrl} غير موجود`,
        },
        StatusCodes.NOT_FOUND,
      ),
    );
  }),
);
app.use(globalErrorMiddleware);

// Start the HTTP server
server.listen(PORT, () => {
  console.log(`Server running:  ${process.env.APP_URL}`.green.bold);
});
