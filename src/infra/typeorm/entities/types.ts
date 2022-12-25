import {
  Column, Entity, ManyToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { Type } from '@src/domain/typeorm/entities';
import { PokemonsEntity } from './pokemons';

@Entity('tb_pokemon_types')
export class TypesEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    name: string;

  @Column()
    url: string;

  @ManyToMany(() => PokemonsEntity, (pokemon) => pokemon.type)
    pokemon: PokemonsEntity[];

  public toPlainClass (): Type {
    return new Type(
      {
        name: this.name,
        url: this.url,
        pokemon: this.pokemon,
      },
      this.id,
    );
  }
}
