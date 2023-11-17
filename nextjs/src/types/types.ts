export type UserBook = {
  id: number;
  user: User;
  book: Book;
  avaliability: Map<string, boolean>;
  condition: string;
  place: string;
  solicitations: number;
  status: string;
};

export type Book = {
  isnb: number;
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
  email: string;
  course?: string;
  college?: string;
  title: string;
  image: string;
  score: number;
};

export type BookRequest = {
  id: number;
  type: string;
  time: number;
  start: string;
  end: string;
  lenderBook: UserBook;
  lender: User;
  borrower: User;
};
