import { IContact } from 'src/users/entity/user.entity';

export interface IOwner {
  email: string;
  name: string;
  password: string;
  user_id?: string;
  contact: IContact[];
}
