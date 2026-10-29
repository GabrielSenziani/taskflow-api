import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service.js';
import { CriarTarefaDto } from './dto/criar-tarefa.dto.js';
import { AtualizaTarefaDto } from './dto/atualizar-tarefa.dto.js';

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

  @Patch(':id')
  atualizarTarefa(@Param('id', ParseIntPipe) id: number, @Body() dados: AtualizaTarefaDto) {
   return this.tarefasService.atualizarTarefa(id, dados)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) 
  excluirTarefa(@Param('id', ParseIntPipe) id: number) {
    return this.tarefasService.excluirTarefa(id)
  }
}
