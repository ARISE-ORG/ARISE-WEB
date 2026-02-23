export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt?: string;
}

export interface Session {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export type AuthToken = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};
