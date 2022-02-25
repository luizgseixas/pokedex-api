import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pokemon } from "./pokemon";

@Entity()
export class Type {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @ManyToMany(() => Pokemon, (pokemon) => pokemon.type)
  pokemon: Pokemon[];
}
