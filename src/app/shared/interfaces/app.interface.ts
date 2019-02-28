export interface Word {
  dakelh: string;
  english: string;
  category: string;
  icon: string;
  audio: Array<string>;
  video: Array<string>;
  images: Array<string>;
}

export interface Phrase {
  dakelh: string;
  english: string;
  category: string;
  icon: string;
  audio: Array<string>;
  video: Array<string>;
  images: Array<string>;
}

export interface LessonCategory {
  id: number;
  dakelh: string;
  english: string;
  icon: string;
  audio: Array<string>;
}

export interface WordLesson {
  words: Array<Word>;
  category: LessonCategory;
}

export interface AppMenuItem {
  icon: string;
  dakelh: string;
  english: string;
  audio: Array<string>;
  route: string;
  className: string;
}
