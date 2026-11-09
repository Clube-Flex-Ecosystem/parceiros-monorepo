import type { CookieOptions, Request, Response } from 'express';

import { env } from './env.js';

type CookieService = {
  get: (name: string) => string | undefined;
  set: (name: string, value: string, options?: CookieOptions) => void;
  delete: (name: string, options?: CookieOptions) => void;
};

export const cookieConfig: CookieOptions = {
  httpOnly: true,
  sameSite: 'lax',
  domain: env.COOKIE_DOMAIN,
  expires: new Date(Date.now() + env.COOKIE_EXPIRES_DAYS * 24 * 60 * 60 * 1000),
};

export const cookie = (request: Request, response: Response): CookieService => ({
  get: (name) => request.cookies?.[name],
  set: (name, value, options) => {
    response.cookie(name, value, { ...cookieConfig, ...options });
  },
  delete: (name, options) => {
    response.clearCookie(name, { ...cookieConfig, ...options });
  },
});
