import { IContact } from '../user.entity';

export interface IUser {
  name: string;
  email: string;
  password: string;
  contact: IContact[];
}
