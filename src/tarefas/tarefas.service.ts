import { Injectable, NotFoundException } from '@nestjs/common';
import { CriarTarefaDto } from './dto/criar-tarefa.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarefa } from './tarefa.entity.js';

@Injectable()
export class TarefasService {
  constructor(
    @InjectRepository(Tarefa)
    private readonly tarefasRepository: Repository<Tarefa>,
  ) {}

  public async buscaPorId(id: number) {
    const buscaTarefaPorId = await this.tarefasRepository.findOneBy({ id });

    if (!buscaTarefaPorId) {
      throw new NotFoundException('Tarefa não encontrada');
    }

    return buscaTarefaPorId;
  }

  public async listarTodos() {
    return this.tarefasRepository.find();
  }

  public async criarTarefa(dados: CriarTarefaDto) {
    const tarefa = this.tarefasRepository.create(dados);

    return await this.tarefasRepository.save(tarefa);
  }
}
