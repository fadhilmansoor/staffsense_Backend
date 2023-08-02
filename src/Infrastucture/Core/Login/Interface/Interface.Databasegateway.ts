export interface IDatabaselogic {
  fetching(user: User);
}

export type User = {
  username: string;
  email: string;
  password: string;
  phonenumber: number;
  status: boolean;
  role: string;
};
