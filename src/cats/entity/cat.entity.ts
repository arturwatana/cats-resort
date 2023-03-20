import { HttpException, HttpStatus } from '@nestjs/common';
import { randomUUID } from 'crypto';
import dayjs from 'dayjs';
import { ICat } from './interface/ICat.interface';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export class Cat {
  id: string;
  name: string;
  age: number;
  ownerEmail: string;
  checkIn: string;
  checkOut: string;

  private constructor(data: ICat) {
    const checkoutDate = dayjs(data.checkOut, 'DD/MM/YYYY');
    const today = dayjs();
    if (checkoutDate.isBefore(today, 'day')) {
      throw new HttpException(
        'Checkout must be after than checkIn',
        HttpStatus.BAD_REQUEST,
      );
    }

    this.id = randomUUID();
    this.name = data.name;
    this.age = data.age;
    this.ownerEmail = data.ownerEmail;
    this.checkIn = today.format('DD/MM/YYYY hh:mm:ss');
    this.checkOut = checkoutDate.format('DD/MM/YYYY hh:mm:ss');
  }

  static create(data: ICat) {
    const cat = new Cat(data);
    return cat;
  }
}
