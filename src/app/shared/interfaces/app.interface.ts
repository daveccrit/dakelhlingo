export interface Word {
  dakelh: string;
  english: string;
  wordCategory: string;
  wordCategoryId: number;
  icon: string;
  audio: Array<string>;
  video: Array<string>;
  images: Array<string>;
}

export interface WordCategory {
  id: number;
  dakelh: string;
  english: string;
}

export interface Phrase {
  dakelh: string;
  english: string;
  lessonCategory: string;
  lessonCategoryId: number;
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

export interface Lesson {
  id: number;
  lessonCategoryId: number;
  audio: Array<string>;
  title: string;
  learningModules: Array<LearningModuleWord | LearningModuleWords>;
  completed?: boolean;
}

export interface LearningModuleWord {
  learningModule: string;
  languageWord: string;
}

export interface LearningModuleWords {
  learningModue: string;
  languageWords: Array<string>;
}

export interface AppData {
  settings: Array<Setting>;
}

export interface Setting {
  name: string;
  value: string;
}
