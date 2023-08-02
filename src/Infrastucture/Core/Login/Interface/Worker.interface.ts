import { Document } from 'mongoose';
export interface IWorker extends Document {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly phonenumber: number;
  readonly status: boolean;
  readonly role: string;
}
