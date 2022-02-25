import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Move } from "./move";

@Entity()
export class Pokemon {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  heigth: number;

  @Column()
  weight: number;

  @ManyToMany(() => Move, (move) => move.pokemon, { nullable: false })
  @JoinTable()
  move: Move[];
}
