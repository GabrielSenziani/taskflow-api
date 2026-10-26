import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Livro {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 50 })
    titulo: string

    @Column({ nullable: true, length: 50 })
    autor?: string | null
}