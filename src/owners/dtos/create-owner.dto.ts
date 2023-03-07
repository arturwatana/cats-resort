import { IsNotEmpty } from 'class-validator';

export class CreateOwnerDTO {
  @IsNotEmpty({
    message: 'name is required',
  })
  name: string;

  @IsNotEmpty({
    message: 'password is required',
  })
  password: string;
}
