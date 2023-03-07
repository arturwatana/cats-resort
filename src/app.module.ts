import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { OwnersController } from './owners/owners.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, OwnersController],
  providers: [AppService],
})
export class AppModule {}
