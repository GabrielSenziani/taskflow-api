import { Module } from '@nestjs/common';
import { LivrosController } from './livros.controller.js';
import { LivrosService } from './livros.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livro } from './livro.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Livro])],
  controllers: [LivrosController],
  providers: [LivrosService]
})
export class LivrosModule {}
