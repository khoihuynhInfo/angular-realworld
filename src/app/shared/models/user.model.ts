
export interface IUserMajor {
  email: string;
  token: string;
  username: string;
}

export interface IUserMinor {
  bio: any;
  createdAt: string;
  id: number;
  image: string;
  updatedAt: string;
}

export type IUserData = {
  user: IUserMajor & IUserMinor;
};



