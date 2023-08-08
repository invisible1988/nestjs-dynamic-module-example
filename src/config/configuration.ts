import { IConfiguration } from './configuration-interface';

export default () => {
  const config: IConfiguration = {
    GoogleAuth: {
      keyFile: process.env.GOOGLE_AUTH_KEYFILE || '',
      scopes: [
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/calendar.events',
      ],
      clientOptions: {
        subject: process.env.GOOGLE_AUTH_SUBJECT || '',
      },
    },
  };
  return config;
};
