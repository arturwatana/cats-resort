import { HttpException, HttpStatus } from '@nestjs/common';
import { randomUUID } from 'crypto';
import dayjs from 'dayjs';
import { ICat } from 'src/cats/entity/interface/ICat.interface';
import { IOwner } from './interface/IOwner.interface';

export interface IContact {
  adress: string;
  phoneNumber: string;
}

export class Owner {
  id: string;
  name: string;
  password: string;
  createdAt: string;

  private constructor(data: IOwner) {
    if (!data.name || !data.password) {
      throw new HttpException(
        'A owner must have a name and password',
        HttpStatus.BAD_REQUEST,
      );
    }

    this.id = randomUUID();
    this.name = data.name;
    this.password = data.password;
    this.createdAt = dayjs().format('DD/MM/YYYY HH:MM:ss');
  }

  static create(data: IOwner) {
    const owner = new Owner(data);
    return owner;
  }
}
