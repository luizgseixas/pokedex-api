import {
  Column, Entity, ManyToMany, PrimaryGeneratedColumn,
} from 'typeorm';

import { MoveModel } from '@src/domain/models/pokemon';
import { PokemonsEntity } from './pokemons';

@Entity('tb_moves')
export class MovesEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    name: string;

  @ManyToMany(() => PokemonsEntity, (pokemon) => pokemon.moves, { nullable: false })
    pokemon: PokemonsEntity[];

  public toPlainClass (): MoveModel {
    return new MoveModel(
      {
        name: this.name,
        pokemon: this.pokemon,
      },
      this.id,
    );
  }
}
