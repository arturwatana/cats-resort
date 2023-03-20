export abstract class IPasswordHash {
  abstract hash(password: string): Promise<string>;
}
