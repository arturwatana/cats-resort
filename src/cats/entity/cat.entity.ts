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
    this.checkIn = dayjs().format('DD/MM/YYYY hh:mm:ss');
    this.checkOut = new Date(data.checkOut).toDateString();
    if (dayjs(this.checkOut).isBefore(this.checkIn)) {
      console.log('data menor do que de entrada');
    }
    console.log(this.checkOut);
    console.log(this.checkIn);
    console.log(dayjs(this.checkOut).isBefore(this.checkIn.split(' ')[0]));
  }

  static create(data: ICat) {
    const cat = new Cat(data);
    return cat;
  }
}
