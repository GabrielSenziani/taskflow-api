import { Test, TestingModule } from '@nestjs/testing';
import { TarefasController } from './tarefas.controller.js';
import { TarefasService } from './tarefas.service.js';

describe('TarefasController', () => {
  let controller: TarefasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TarefasController],
      providers: [
        {
          provide: TarefasService,
          useValue: {
            listarTodos: vi.fn(),
            buscarPorId: vi.fn(),
            criarTarefa: vi.fn(),
            atualizarTarefa: vi.fn(),
            excluirTarefa: vi.fn()
          }
        }
      ]
    }).compile();

    controller = module.get<TarefasController>(TarefasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
