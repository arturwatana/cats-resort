import { HttpException, HttpStatus } from '@nestjs/common';
import { randomUUID } from 'crypto';
import dayjs from 'dayjs';
import { IOwner } from './interface/IOwner.interface';
import { IContact } from 'src/users/entity/user.entity';

export class Owner {
  id: string;
  name: string;
  email: string;
  contact: IContact[];
  user_id?: string;
  createdAt: string;

  private constructor(data: IOwner) {
    if (!data.name || !data.password || !data.email) {
      throw new HttpException(
        'An owner must have a name, password or email',
        HttpStatus.BAD_REQUEST,
      );
    }

    this.id = randomUUID();
    this.name = data.name;
    this.email = data.email;
    this.user_id = data.user_id;
    this.contact = data.contact;
    this.createdAt = dayjs().format('DD/MM/YYYY HH:MM:ss');
  }

  static create(data: IOwner) {
    const owner = new Owner(data);
    return owner;
  }
}
