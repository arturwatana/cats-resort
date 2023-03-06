import { IsNotEmpty } from 'class-validator';

export class CreateCatDTO {
  @IsNotEmpty({
    message: 'Ops, cat name is required',
  })
  name: string;

  @IsNotEmpty({
    message: 'Ops, cat age is required',
  })
  age: number;
}
