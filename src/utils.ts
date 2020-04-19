import { Song } from './types';

export const lightenDarkenColor = (col: string, amt: number): string => {
  let usePound = false;

  if (col[0] == '#') {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
};

export const buildUrlParams = (params: any[][]): string => {
  return params.reduce((acc, [key, value]) => {
    if (!acc) return `${key}=${value}`;
    return `${acc}&${key}=${value}`;
  }, '');
};

export const getRandomFloat = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min) + min;
};

export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getSelectedTrack = (
  songs: Song[],
  index: number,
  calls: number,
  limit: number
): Song => {
  if (calls === limit) {
    return songs[0];
  }

  if (songs[index].preview_url) {
    return songs[index];
  }

  return getSelectedTrack(songs, getRandomInt(0, 4), calls + 1, limit);
};
