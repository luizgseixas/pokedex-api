import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { PokemonEntity } from './pokemon';

import { Move } from '@src/domain/typeorm/entities';

@Entity('tb_move')
export class MoveEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @ManyToMany(() => PokemonEntity, (pokemon) => pokemon.move, { nullable: false })
  pokemon: PokemonEntity[];

  public toPlainClass(): Move {
    return new Move(
      {
        name: this.name,
        url: this.url,
        pokemon: this.pokemon,
      },
      this.id,
    );
  }
}
