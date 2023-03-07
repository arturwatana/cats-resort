import { randomUUID } from 'crypto';
import dayjs from 'dayjs';
import { ICat } from './interface/ICat.interface';

export class Cat {
  id: string;
  name: string;
  age: number;
  ownerId: string;
  checkIn: string;
  checkOut: string;

  private constructor(data: ICat) {
    this.id = randomUUID();
    this.name = data.name;
    this.age = data.age;
    this.ownerId = data.ownerId;
    this.checkIn = dayjs().format('DD/MM/YYYY HH/MM/ss');
    this.checkOut = data.checkOut;
  }

  static create(data: ICat) {
    const cat = new Cat(data);
    return cat;
  }
}
