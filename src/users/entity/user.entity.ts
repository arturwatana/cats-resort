import { IUser } from './interface/IUser.interface';
import { randomUUID } from 'crypto';

export type IContact = {
  phone: string;
  address: string;
};

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  contact: IContact[];

  private constructor(data: IUser) {
    this.id = randomUUID();
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.contact = data.contact;
  }

  static create(data: IUser): User {
    const user = new User(data);
    return user;
  }
}
