import {
  Column, Entity, ManyToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeModel } from '@src/domain/models/pokemon';
import { PokemonsEntity } from './pokemons';

@Entity('tb_pokemon_types')
export class TypesEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    name: string;

  @ManyToMany(() => PokemonsEntity, (pokemon) => pokemon.types)
    pokemon: PokemonsEntity[];

  public toPlainClass (): TypeModel {
    return new TypeModel(
      {
        name: this.name,
        pokemon: this.pokemon,
      },
      this.id,
    );
  }
}
