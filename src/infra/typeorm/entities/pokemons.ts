import { PokemonModel } from '@src/domain/models/pokemon';
import {
  Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { MovesEntity } from './moves';
import { TypesEntity } from './types';

@Entity('tb_pokemons')
export class PokemonsEntity {
  constructor (data: Partial<PokemonsEntity | PokemonModel>) {
    if (data) Object.assign(this, data);
  }

  @PrimaryGeneratedColumn('uuid')
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

  @CreateDateColumn()
    created_at?: Date;

  @ManyToMany(() => MovesEntity, (move) => move.pokemon, { nullable: false })
  @JoinTable()
    moves: MovesEntity[];

  @ManyToMany(() => TypesEntity, (type) => type.pokemon, { nullable: false })
  @JoinTable()
    types: TypesEntity[];

  public toPlainClass (): PokemonModel {
    return new PokemonModel(
      {
        name: this.name,
        heigth: this.heigth,
        weight: this.weight,
        sprite_front_default: this.sprite_front_default,
        sprite_front_female: this.sprite_front_female,
        sprite_front_shiny: this.sprite_front_shiny,
        sprite_front_shiny_female: this.sprite_front_shiny_female,
        sprite_back_default: this.sprite_back_default,
        sprite_back_female: this.sprite_back_female,
        sprite_back_shiny: this.sprite_back_shiny,
        sprite_back_shiny_female: this.sprite_back_shiny_female,
        hp: this.hp,
        attack: this.attack,
        defense: this.defense,
        special_attack: this.special_attack,
        special_defense: this.special_defense,
        speed: this.speed,
        location_area: this.location_area,
        types: this.types,
      },
      this.id,
    );
  }
}
