import { PartialType } from "@nestjs/mapped-types";
import { CriarTarefaDto } from "./criar-tarefa.dto.js";
import { IsEnum, IsOptional } from "class-validator";

import { StatusTarefa } from "../status-tarefa.enum.js";
import { Transform } from "class-transformer";
import { trimOptionalString } from "../../utils/string.util.js";

export class AtualizaTarefaDto extends PartialType(CriarTarefaDto) {
    @IsOptional()
    @Transform(trimOptionalString)
    @IsEnum(StatusTarefa, { message: "O status fornecido é inválido, status válidos: nao_inciiada, em_andamento, finalizada e descartada"})
    status?: StatusTarefa
}