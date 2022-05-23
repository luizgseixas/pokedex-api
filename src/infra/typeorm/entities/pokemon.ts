import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Move } from "./move";
import { Type } from "./types";

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

  @Column()
  location_area: string;

  @Column()
  sprite_front_default: string;

  @Column({ nullable: true })
  sprite_front_female: string;

  @Column()
  sprite_front_shiny: string;

  @Column({ nullable: true })
  sprite_front_shiny_female: string;

  @Column()
  sprite_back_default: string;

  @Column({ nullable: true })
  sprite_back_female: string;

  @Column()
  sprite_back_shiny: string;

  @Column({ nullable: true })
  sprite_back_shiny_female: string;

  @Column()
  hp: number;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  special_attack: number;

  @Column()
  special_defense: number;

  @Column()
  speed: number;

  @ManyToMany(() => Move, (move) => move.pokemon, { nullable: false })
  @JoinTable()
  move: Move[];

  @ManyToMany(() => Type, (type) => type.pokemon, { nullable: false })
  @JoinTable()
  type: Type[];
}
