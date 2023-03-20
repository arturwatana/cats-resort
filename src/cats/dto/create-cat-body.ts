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

  @IsNotEmpty({
    message: 'Ops, owner email is required',
  })
  ownerEmail: string;

  @IsNotEmpty({
    message: 'Ops, checkout is required in cats resort',
  })
  checkOut: string;
}
