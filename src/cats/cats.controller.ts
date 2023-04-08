import { Body, Controller, Get, Injectable, Param, Post } from '@nestjs/common';
import { CreateCatDTO } from 'src/cats/dto/create-cat-body';
import { IOwnerRepository } from 'src/owners/repositories/interface/IOwner.repository';
import { Cat } from './entity/cat.entity';
import { ICatsRepository } from './Repositories/interface/ICatsRepository';
import { AddNewCatUseCase } from './useCases/addNewCat.useCase';

@Injectable()
@Controller('cats')
export class CatsController {
  constructor(
    private catsRepository: ICatsRepository,
    private ownersRepository: IOwnerRepository,
  ) {}
  @Post()
  async create(@Body() body: CreateCatDTO): Promise<Cat> {
    const createCatUseCase = new AddNewCatUseCase(
      this.catsRepository,
      this.ownersRepository,
    );
    const data = body;
    const CreatedCat = await createCatUseCase.execute(data);
    return CreatedCat;
  }

  @Get(':id')
  async findCatById(@Param('id') id: string): Promise<Cat | undefined> {
    const findedCat = await this.catsRepository.findById(id);
    return findedCat;
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsRepository.showAll();
  }
}
