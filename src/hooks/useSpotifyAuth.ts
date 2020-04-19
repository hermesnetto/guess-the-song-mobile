import { SPOTIFY_API_URL } from '../constants';
type UseSpotifyAuthResponse = () => Promise<string>;

export const useSpotifyAuth = (): UseSpotifyAuthResponse => {
  const signIn = async (): Promise<string> => {
    const base64credentials =
      'OGNmNTM4MGY1ODhjNGVhMTg4NDk2ZTI1NGVkNjM3NjA6MjZjZjkxMTg2ZDdlNDBhMWI1ZmVlY2Y0NDlmNzk4MWI=';

    const res = await fetch(`${SPOTIFY_API_URL}/token`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${base64credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const json = await res.json();
    const token = json.access_token;

    return token;
  };

  return signIn;
};
