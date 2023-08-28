import { createTransport } from 'nodemailer';
import keys from './keys';

const INFO_EMAIL = process.env.INFO_EMAIL ?? '';

export type EmailData = {
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  html?: string;
  attachments?: any[];
};

export function sendEmail(data: EmailData) {
  try {
    const { to, cc, bcc, subject, html, attachments } = data;

    if (to && subject) {
      const transporter = createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          type: 'OAuth2',
          user: INFO_EMAIL,
          serviceClient: keys.client_id,
          privateKey: keys.private_key,
          accessUrl: keys.token_uri,
        },
      });

      const message = {
        to,
        cc,
        bcc,
        from: INFO_EMAIL,
        subject,
        html,
        attachments,
      };

      return new Promise<any>((resolve, reject) => {
        transporter.sendMail(message, error => {
          if (error) {
            reject(error.message);
          } else {
            resolve({
              status: 200,
              message: 'Email sent successfully!',
            });
          }
        });
      });
    } else {
      throw new Error('Missing Values');
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
