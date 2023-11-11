export type UserBook = {
  user_id: number;
  info: Book;
  avaliability: Map<string, boolean>;
  condition: string;
  place: string;
  solicitations: number;
  status: string;
};

export type Book = {
  isnb: string;
  title: string;
  author: string;
  edition: number;
  year: number;
  language: string;
  category: string;
  thumbnail: string;
  grade: number;
  pages: number;
  sinopse: string;
  url: string;
};

export type Category = {
  name: string;
  books: Book[];
};

export type BookShelf = {
  shelf: Category[];
};

export type User = {
  name: string;
  title: string;
  image: string;
};
