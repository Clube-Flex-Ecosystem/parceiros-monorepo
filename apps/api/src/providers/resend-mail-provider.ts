import { Resend } from 'resend';

import { StatusCodes } from 'http-status-codes';

import { env } from '../config/env.js';
import { AppError } from '../domains/errors/app-error.js';
import type { MailProvider, SendMailInput } from '../domains/providers/mail-provider.js';

export class ResendMailProvider implements MailProvider {
  private readonly client: Resend;
  private readonly from: string;

  constructor(apiKey = env.RESEND_API_KEY, from = env.RESEND_FROM) {
    this.client = new Resend(apiKey);
    this.from = from;
  }

  async send(input: SendMailInput): Promise<void> {
    try {
      const { error } = await this.client.emails.send({
        from: this.from,
        to: input.to,
        subject: input.subject,
        text: input.text,
        ...(input.html ? { html: input.html } : {}),
      });

      if (error) {
        throw new AppError(StatusCodes.SERVICE_UNAVAILABLE, 'Não foi possível enviar o e-mail.');
      }
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }

      throw new AppError(StatusCodes.SERVICE_UNAVAILABLE, 'Não foi possível enviar o e-mail.');
    }
  }
}
