import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CreateCatDTO } from 'src/cats/dto/create-cat-body';
import { Cat } from './entity/cat.entity';
import { ICat } from './entity/interface/ICat.interface';
import { CatsMemoryRepository } from './Repositories/catsRepository.memory';
import { AddNewCatUseCase } from './useCases/addNewCat.useCase';

const catsRepository = new CatsMemoryRepository();
@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() body: CreateCatDTO): Promise<Cat> {
    const createCatUseCase = new AddNewCatUseCase(catsRepository);
    const data = body;
    const CreatedCat = await createCatUseCase.execute(data);
    return CreatedCat;
  }

  @Get(':id')
  findCatById(@Param('id') id: string): Promise<Cat | undefined> {
    const findedCat = catsRepository.findById(id);
    return findedCat;
  }

  @Get()
  async findAll(): Promise<ICat[]> {
    return catsRepository.showAll();
  }
}
