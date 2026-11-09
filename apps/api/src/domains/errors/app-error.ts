import { getReasonPhrase, StatusCodes } from 'http-status-codes';

export class AppError extends Error {
  public readonly code: string;

  constructor(
    public readonly statusCode: StatusCodes,
    message = getReasonPhrase(statusCode),
  ) {
    super(message);
    this.name = 'AppError';
    this.code = getReasonPhrase(statusCode);
  }
}
