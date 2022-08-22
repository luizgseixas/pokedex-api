import {
  Column, Entity, ManyToMany, PrimaryGeneratedColumn,
} from 'typeorm';

import { Move } from '@src/domain/typeorm/entities';
import { PokemonEntity } from './pokemon';

@Entity('tb_move')
export class MoveEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    name: string;

  @Column()
    url: string;

  @ManyToMany(() => PokemonEntity, (pokemon) => pokemon.moves, { nullable: false })
    pokemons: PokemonEntity[];

  public toPlainClass (): Move {
    return new Move(
      {
        name: this.name,
        url: this.url,
      },
      this.id,
    );
  }
}
