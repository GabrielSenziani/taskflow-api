import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service.js';
import { CriarTarefaDto } from './dto/criar-tarefa.dto.js';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Get()
  listarTodasAsTarefas() {
    return this.tarefasService.listarTodos();
  }

  @Get(':id')
  buscaTarefaPorId(@Param('id', ParseIntPipe) id: number) {
    return this.tarefasService.buscaPorId(id);
  }

  @Post()
  criarNovaTarefa(@Body() dados: CriarTarefaDto) {
    return this.tarefasService.criarTarefa(dados);
  }
}
