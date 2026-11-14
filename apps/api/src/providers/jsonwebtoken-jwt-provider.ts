import jwt from 'jsonwebtoken';

import { StatusCodes } from 'http-status-codes';

import { env } from '../config/env.js';
import { BaseError } from '../domains/errors/base-error.js';
import type { JwtPayload, JwtProvider, JwtSignOptions } from '../domains/providers/jwt-provider.js';

export class JsonwebtokenJwtProvider implements JwtProvider {
  private readonly secret: string;

  constructor(secret = env.JWT_SECRET) {
    this.secret = secret;
  }

  sign(payload: JwtPayload, options: JwtSignOptions): string {
    try {
      return jwt.sign(payload, this.secret, {
        algorithm: 'HS256',
        expiresIn: options.expiresIn,
      });
    } catch {
      throw new BaseError(StatusCodes.INTERNAL_SERVER_ERROR, 'Não foi possível criar a sessão.');
    }
  }

  verify(token: string): JwtPayload {
    try {
      const payload = jwt.verify(token, this.secret, { algorithms: ['HS256'] });

      if (typeof payload !== 'object' || payload === null || Array.isArray(payload)) {
        throw new BaseError(StatusCodes.UNAUTHORIZED, 'Sessão ausente ou inválida.');
      }

      return payload;
    } catch (error) {
      if (error instanceof BaseError) {
        throw error;
      }

      throw new BaseError(StatusCodes.UNAUTHORIZED, 'Sessão ausente ou inválida.');
    }
  }
}
