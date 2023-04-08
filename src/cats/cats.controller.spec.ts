import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { Cat } from './entity/cat.entity';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should be able to create a new Cat', async () => {
    const catMock = Cat.create({
      name: 'foo',
      age: 2,
      ownerEmail: 'fooOwner@example.com',
      checkOut: '24/03/2023',
    });

    const createdCatInDB = await controller.create(catMock);

    expect(createdCatInDB).toBeInstanceOf(Cat);
  });
});
