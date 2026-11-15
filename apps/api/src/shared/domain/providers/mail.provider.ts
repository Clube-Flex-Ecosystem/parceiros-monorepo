export type SendMailInput = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

export interface MailProvider {
  send(input: SendMailInput): Promise<void>;
}
