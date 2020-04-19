import { useState, useCallback } from 'react';

import { Playlist } from '../types';
import { buildUrlParams } from '../utils';

interface HttpResponse {
  playlists: {
    items: Playlist[];
  };
  error?: {
    status: number;
    messaged: string;
  };
}

export type UseFetchPlaylistsResponse = [Playlist[], (genre: string, token: string | null) => void];

export const useFetchPlaylists = (): UseFetchPlaylistsResponse => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const fetchAndSetPlaylists = useCallback(async (genre: string, token: string | null) => {
    const paramsArr = [
      ['q', genre],
      ['type', 'playlist'],
      ['limit', 5],
    ];
    const params = buildUrlParams(paramsArr);
    const response = await fetch(`https://api.spotify.com/v1/search?${params}`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${token || ''}`,
        'Content-Type': 'application/json',
      }),
    });

    const data = (await response.json()) as HttpResponse;
    if (!data.error) {
      setPlaylists(data.playlists.items);
    }
  }, []);

  return [playlists, fetchAndSetPlaylists];
};
