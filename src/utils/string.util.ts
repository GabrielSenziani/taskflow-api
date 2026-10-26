import { TransformFnParams } from "class-transformer";

function limparString(value: unknown): unknown {
    return typeof value === "string" ? value.trim(): value
}

export function trimString({value}: TransformFnParams) {
    return limparString(value)
}

export function trimOptionalString ({ value }: TransformFnParams) {
    const valorLimpo = limparString(value)
    return valorLimpo === "" ? undefined : valorLimpo
}