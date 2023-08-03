import { OAuth2Client } from 'google-auth-library';

const CLIENT_ID = 'your-client-id'; // Replace with your actual client ID
const client = new OAuth2Client(CLIENT_ID);

export async function jj(idToken) {
  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const email = payload.email;

    return email.endsWith('@gmail.com');
  } catch (error) {
    console.error('Error validating Gmail ID token:', error);
    return false;
  }
}
