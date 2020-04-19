export type Genre = {
  id: string;
  fill: string;
  name: string;
};

export type AlbumImage = {
  height: number;
  url: string;
  width: number;
};

export type Artists = {
  name: string;
};

export type Song = {
  id: string;
  name: string;
  album: {
    images: AlbumImage[];
    name: string;
  };
  artists: Artists[];
  preview_url: string;
};

export type RoundStates = 'playing' | 'not_tried' | 'missed' | 'hit';

export type Round = {
  songs: Song[];
  selectedId: string;
  guessedId: string;
  state: RoundStates;
};
