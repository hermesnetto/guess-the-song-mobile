import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const tokenKey = '@gts_spotify_token';

export type UseSpotifyTokenResponse = {
  token: string | null;
  storeToken: (token: string) => void;
};

export const useSpotifyToken = (): UseSpotifyTokenResponse => {
  const [token, setToken] = useState<string | null>(null);

  const storeToken = async (token: string) => {
    try {
      await AsyncStorage.setItem(tokenKey, token);
      setToken(token);
    } catch (e) {}
  };

  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem(tokenKey);
        setToken(token);
      } catch (e) {}
    })();
  }, []);

  return { token, storeToken };
};
