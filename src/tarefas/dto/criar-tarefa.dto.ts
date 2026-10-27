import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { trimString, trimOptionalString } from '../../utils/string.util.js';
import {
  DESCRICAO_MAX_CARACTERES,
  TITULO_MAX_CARACTERES,
} from '../tarefa.constants.js';

export class CriarTarefaDto {
  @IsString({ message: 'O titulo deve estar no formato de texto' })
  @IsNotEmpty({ message: 'Campo vazio e só espaçamentos não são permitidos' })
  @MinLength(2, { message: 'O titulo deve ter no minimo 2 caracteres' })
  @MaxLength(TITULO_MAX_CARACTERES, {
    message: `O titulo pode ter no máximo ${TITULO_MAX_CARACTERES} caracteres`,
  })
  @Transform(trimString)
  titulo: string;

  @IsOptional()
  @IsString({ message: 'A descrição deve estar no formato de texto' })
  @MaxLength(DESCRICAO_MAX_CARACTERES, {
    message: `A descrição pode ter no máximo ${DESCRICAO_MAX_CARACTERES} caracteres`,
  })
  @Transform(trimOptionalString)
  descricao?: string;
}
