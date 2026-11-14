import { getReasonPhrase, StatusCodes } from 'http-status-codes';

export class BaseError extends Error {
  public readonly code: string;

  constructor(
    public readonly statusCode: StatusCodes,
    message = getReasonPhrase(statusCode),
  ) {
    super(message);
    this.name = 'BaseError';
    this.code = getReasonPhrase(statusCode);
  }
}
