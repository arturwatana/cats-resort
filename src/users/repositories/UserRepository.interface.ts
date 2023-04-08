import { User } from '../entity/user.entity';

export abstract class IUserRepository {
  abstract save(data: User): Promise<User>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract getAllUsers(): Promise<User[]>;
}
