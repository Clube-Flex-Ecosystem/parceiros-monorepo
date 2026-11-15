import { Resend } from 'resend';

import { StatusCodes } from 'http-status-codes';

import { env } from '../../../env.js';
import { BaseError } from '../../domain/errors/base.error.js';
import type { MailProvider, SendMailInput } from '../../domain/providers/mail.provider.js';

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
        throw new BaseError(StatusCodes.SERVICE_UNAVAILABLE, 'Não foi possível enviar o e-mail.');
      }
    } catch (error) {
      if (error instanceof BaseError) {
        throw error;
      }

      throw new BaseError(StatusCodes.SERVICE_UNAVAILABLE, 'Não foi possível enviar o e-mail.');
    }
  }
}
