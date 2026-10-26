import { Injectable } from '@nestjs/common';
import { CriarLivroDto } from './dto/criar-livro.dto.js';

@Injectable()
export class LivrosService {

    private livros = [
        {id: 1, titulo: "Dom Casmurro"},
        {id: 2, titulo: "O Hobbit"}
    ]

    public buscaPorId(id: number) {
        return this.livros.find(livro => livro.id === id)
    }

    public listarTodos() {
     return this.livros
    }

    public criarLivro(dadosDoLivro: CriarLivroDto) {
        const { titulo, autor } = dadosDoLivro

        const novoId = this.livros.length + 1

        const novoLivro = {
            id: novoId,
            titulo: titulo,
            ...(autor && { autor: autor })
        }

        this.livros.push(novoLivro)

        return novoLivro
    }
}
