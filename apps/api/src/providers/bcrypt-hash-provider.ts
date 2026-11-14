import bcrypt from 'bcrypt';

import { StatusCodes } from 'http-status-codes';

import { BaseError } from '../domains/errors/base-error.js';
import type { HashProvider } from '../domains/providers/hash-provider.js';

export class BcryptHashProvider implements HashProvider {
  constructor(private readonly saltRounds = 12) {}

  async hash(value: string): Promise<string> {
    try {
      return await bcrypt.hash(value, this.saltRounds);
    } catch {
      throw new BaseError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Não foi possível processar a credencial.',
      );
    }
  }

  async compare(value: string, hashedValue: string): Promise<boolean> {
    try {
      return await bcrypt.compare(value, hashedValue);
    } catch {
      throw new BaseError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Não foi possível processar a credencial.',
      );
    }
  }
}
