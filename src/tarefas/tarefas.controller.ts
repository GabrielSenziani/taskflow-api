import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TarefasService as TarefasService } from './tarefas.service.js';
import { CriarTarefaDto } from './dto/criar-tarefa.dto.js';

@Controller('livros')
export class TarefasController {
    constructor(private readonly livrosService: TarefasService) {}

    @Get()
    listarTodosOsLivros() {
        return this.livrosService.listarTodos()
    }

    @Get(":id")
    buscaLivroPorId(@Param("id", ParseIntPipe) id: number) {
        const livro = this.livrosService.buscaPorId(id)

        if(!livro) {
            throw new NotFoundException("Livro não encontrado")
        }

        return livro
    }

    @Post()
    criarNovoLivro(@Body() dados: CriarTarefaDto) {
        return this.livrosService.criarLivro(dados)
    }
    
}
