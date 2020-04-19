import { getRandomFloat, buildUrlParams } from './utils';
import { Song } from './types';

type HttpResponse = {
  tracks: Song[];
  error?: {
    message: string;
  };
};
export const fetchRoundSongs = (genre: string, token: string | null): Promise<HttpResponse> => {
  const params = buildUrlParams([
    ['limit', 4],
    ['market', 'BR'], // Get market dinamically
    ['seed_genres', genre],
    ['min_acousticness', getRandomFloat(0.0, 0.5)],
    ['min_danceability', getRandomFloat(0.0, 0.5)],
    ['min_energy', getRandomFloat(0.0, 0.5)],
    ['min_instrumentalness', getRandomFloat(0.0, 0.5)],
    ['min_valence', getRandomFloat(0.0, 0.5)],
  ]);

  return fetch(`https://api.spotify.com/v1/recommendations?${params}`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${token || ''}`,
      'Content-Type': 'application/json',
    }),
  }).then(res => res.json());
};
