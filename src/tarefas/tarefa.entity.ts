import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StatusTarefa } from './status-tarefa.enum.js';

@Entity()
export class Tarefa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  titulo: string;

  @Column({ nullable: true, type: 'text' })
  descricao?: string;

  @Column({
    type: 'enum',
    enum: StatusTarefa,
    default: StatusTarefa.NAO_INICIADA,
  })
  status: StatusTarefa;

  @CreateDateColumn()
  criadaEm: Date;

  @DeleteDateColumn({ nullable: true })
  excluidaEm?: Date | null;
}
