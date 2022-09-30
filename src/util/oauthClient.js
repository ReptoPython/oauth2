import { google } from 'googleapis';

export const oauthClient = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
   'http://127.0.0.1:3000/auth/google/callback',
);