import { User } from 'src/users/entity/user.entity';
import { IUserRepository } from '../UserRepository.interface';

export class UserMemoryRepository implements IUserRepository {
  users: User[] = [];

  async save(data: User): Promise<User> {
    this.users.push(data);
    return data;
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);
    return user ?? null;
  }
  async getAllUsers(): Promise<User[]> {
    return this.users;
  }
}
