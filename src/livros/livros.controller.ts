import { BadRequestException, Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { LivrosService } from './livros.service.js';
import { CriarLivroDto } from './dto/criar-livro.dto.js';

@Controller('livros')
export class LivrosController {
    constructor(private readonly livrosService: LivrosService) {}

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
    criarNovoLivro(@Body() dados: CriarLivroDto) {
        return this.livrosService.criarLivro(dados)
    }
    
}
