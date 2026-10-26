import { Injectable } from '@nestjs/common';
import { CriarTarefaDto } from './dto/criar-tarefa.dto.js';

@Injectable()
export class TarefasService {

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

    public criarLivro(dadosDoLivro: CriarTarefaDto) {
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
