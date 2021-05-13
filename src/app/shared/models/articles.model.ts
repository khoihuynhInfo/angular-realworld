export interface IAuthor {
  username: string;
  bio: any;
  image: string;
  following: boolean;
}

export interface IArticles {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: Array<string>;
  description: string;
  author: IAuthor;
  favorited: boolean;
  favoritesCount: number;
}
