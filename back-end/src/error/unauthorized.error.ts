import { StatusCodes } from 'http-status-codes';

import { MessageType } from '../types/enums/message-type.enum';
import { ResponseStatus } from '../types/enums/response-status.enum';

import { ApiError } from './api.error';

export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super({
      messages: [{ message, type: MessageType.ERROR }],
      statusCode: StatusCodes.UNAUTHORIZED,
      status: ResponseStatus.FAIL,
    });
  }
}
