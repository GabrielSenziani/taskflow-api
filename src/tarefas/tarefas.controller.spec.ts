import { Test, TestingModule } from '@nestjs/testing';
import { TarefasController as TarefasController } from './tarefas.controller.js';

describe('LivrosController', () => {
  let controller: TarefasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TarefasController],
    }).compile();

    controller = module.get<TarefasController>(TarefasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
