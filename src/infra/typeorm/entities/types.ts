import {
  Column, Entity, ManyToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { Type } from '@src/domain/typeorm/entities';
import { PokemonEntity } from './pokemon';

@Entity('tb_type')
export class TypeEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    name: string;

  @Column()
    url: string;

  @ManyToMany(() => PokemonEntity, (pokemon) => pokemon.types, { nullable: false })
    pokemons: PokemonEntity[];

  public toPlainClass (): Type {
    return new Type(
      {
        name: this.name,
        url: this.url,
      },
      this.id,
    );
  }
}
