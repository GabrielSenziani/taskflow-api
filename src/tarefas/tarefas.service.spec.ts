import { Test, TestingModule } from '@nestjs/testing';
import { TarefasService } from './tarefas.service.js';
import { Tarefa } from './tarefa.entity.js';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('TarefasService', () => {
  let service: TarefasService;
   let repositorioMock: Repository<Tarefa>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TarefasService, {
        provide: getRepositoryToken(Tarefa),
        useValue: {
          findOneBy: vi.fn(),
          find: vi.fn(),
          create: vi.fn(),
          save: vi.fn(),
          softRemove: vi.fn()
        }
      }],
    }).compile();

    repositorioMock = module.get<Repository<Tarefa>>(
      getRepositoryToken(Tarefa)
    )

    service = module.get<TarefasService>(TarefasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repositorioMock).toBeDefined()
  });

  describe("Criar Tarefa", () => {
    it("Deve criar tarefa e salvar com sucesso", async () => {
      const dto = {
        titulo: "Nova Tarefa",
        descricao: "Concluir até amanhã"
      }

      const tarefaCriada = { id: 1, ...dto }

      vi.spyOn(repositorioMock, "create").mockReturnValue(tarefaCriada as any)
      vi.spyOn(repositorioMock, "save").mockResolvedValue(tarefaCriada as any)

      const resultado = await service.criarTarefa(dto)
      
      expect(resultado).toEqual(tarefaCriada)
      expect(resultado.titulo).toBe("Nova Tarefa")
      expect(resultado.descricao).toBe("Concluir até amanhã")
      expect(repositorioMock.create).toHaveBeenCalledWith(dto)
      expect(repositorioMock.save).toHaveBeenCalledWith(tarefaCriada)
    })
  })
});
