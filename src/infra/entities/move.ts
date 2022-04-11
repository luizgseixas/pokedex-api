import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pokemon } from "./pokemon";

@Entity()
export class Move {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @ManyToMany(() => Pokemon, (pokemon) => pokemon.move, { nullable: false })
  pokemon: Pokemon[];
}
