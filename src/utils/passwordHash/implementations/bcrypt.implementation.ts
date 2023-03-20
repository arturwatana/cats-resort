import { IPasswordHash } from '../IPasswordHash.interface';
import bcrypt from 'bcrypt';

export class PasswordBCryptHash implements IPasswordHash {
  async hash(password: string): Promise<string> {
    const passwordHashed = await bcrypt.hash(password, 10);
    return passwordHashed;
  }
}
