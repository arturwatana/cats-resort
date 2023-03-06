import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CreateCatDTO } from 'src/dto/create-cat-body';
import { Cat } from './entity/cat.entity';
import { CatsRepository, ICat } from './Repositories/catsRepository.memory';
import { AddNewCatUseCase } from './useCases/addNewCat.useCase';

const catsRepository = new CatsRepository();
@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() body: CreateCatDTO): Promise<Cat> {
    const createCatUseCase = new AddNewCatUseCase(catsRepository);
    const data = body;
    const CreatedCat = await createCatUseCase.execute(data);
    console.log(await catsRepository.showAll());
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
