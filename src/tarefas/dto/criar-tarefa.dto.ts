import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Transform } from "class-transformer";
import { trimString, trimOptionalString } from "../../utils/string.util.js";

export class CriarTarefaDto {
    @IsString({ message: "O titulo deve estar no formato de texto" })
    @IsNotEmpty({ message: "Campo vazio e só espaçamentos não são permitidos" })
    @MinLength(2, { message: "O titulo deve ter no minimo 2 caracteres" })
    @MaxLength(50, { message: "O titulo pode ter no máximo 50 caracteres" })
    @Transform(trimString)
    titulo: string

    @IsOptional()
    @IsString({ message: "O nome do autor deve estar no formato de texto" })
    @MaxLength(50, {  message: "O nome do autor pode ter no máximo 50 caracteres" })
    @Transform(trimOptionalString)
    autor?: string
}