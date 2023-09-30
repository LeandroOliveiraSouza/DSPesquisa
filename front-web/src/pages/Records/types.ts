export type RecordResponse = {
  content: RecordItem[];
  totalPage: number;
};

export type RecordItem = {
  id: number;
  moment: string;
  name: string;
  age: number;
  gameTitle: string;
  gamePlatform: Platform;
  genreName: string;
};

export type Platform = 'PC' | 'Playstation' | 'Xbox';
