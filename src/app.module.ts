import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { OwnersController } from './owners/owners.controller';
import { ICatsRepository } from './cats/Repositories/interface/ICatsRepository';
import { CatsMemoryRepository } from './cats/Repositories/catsRepository.memory';
import { IOwnerRepository } from './owners/repositories/interface/IOwner.repository';
import { OwnersMemoryRepository } from './owners/repositories/owners.memory.repository';
import { IPasswordHash } from './utils/passwordHash/IPasswordHash.interface';
import { PasswordBCryptHash } from './utils/passwordHash/implementations/bcrypt.implementation';
@Module({
  imports: [],
  controllers: [AppController, CatsController, OwnersController],
  providers: [
    AppService,
    {
      provide: ICatsRepository,
      useClass: CatsMemoryRepository,
    },
    {
      provide: IOwnerRepository,
      useClass: OwnersMemoryRepository,
    },
    {
      provide: IPasswordHash,
      useClass: PasswordBCryptHash,
    },
  ],
})
export class AppModule {}
