import { IsNotEmpty } from 'class-validator';
import { IContact } from 'src/users/entity/user.entity';

export class CreateOwnerDTO {
  @IsNotEmpty({
    message: 'name is required',
  })
  name: string;

  @IsNotEmpty({
    message: 'password is required',
  })
  password: string;

  @IsNotEmpty({
    message: 'email is required',
  })
  email: string;

  @IsNotEmpty({
    message: 'at least one contact is required',
  })
  contact: IContact[];
}
