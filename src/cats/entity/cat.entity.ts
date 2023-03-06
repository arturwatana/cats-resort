import { randomUUID } from 'crypto';
import { ICat } from '../Repositories/catsRepository.memory';

export class Cat {
  id: string;
  name: string;
  age: number;

  private constructor({ name, age }: ICat) {
    this.id = randomUUID();
    this.name = name;
    this.age = age;
  }

  static create(data: ICat) {
    const cat = new Cat(data);
    return cat;
  }
}
