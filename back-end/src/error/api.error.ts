import { StatusCodes, getReasonPhrase } from 'http-status-codes';

import { MessageType } from '../types/enums/message-type.enum';
import { ResponseStatus } from '../types/enums/response-status.enum';
interface ApiErrorOptions {
  statusCode: StatusCodes;
  messages: { message: string; type?: MessageType }[];
  metadata?: any;
  status: ResponseStatus;
}

export class ApiError extends Error {
  public statusCode;
  status;
  messages;
  metadata;
  constructor({ statusCode, messages, metadata, status }: ApiErrorOptions) {
    super();
    this.name = getReasonPhrase(statusCode);
    this.statusCode = statusCode;
    this.status = status;
    this.messages = messages;
    this.metadata = metadata;
    this.stack =
      process.env.NODE_ENV === 'prod' ? 'You are in production' : this.stack;
  }
}
