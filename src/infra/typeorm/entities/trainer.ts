import { Trainer } from '@src/domain/typeorm/entities';
import {
  Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryColumn,
} from 'typeorm';
import { MoveEntity } from './move';
import { PokemonEntity } from './pokemon';
import { TypeEntity } from './types';

@Entity('tb_trainer')
export class TrainerEntity {
  constructor (data: Partial<TrainerEntity | Trainer>) {
    if (data) Object.assign(this, data);
  }

  @PrimaryColumn()
    id: string;

  @Column()
    name: string;

  @Column()
    email: string;

  @Column()
    password: string;

  @ManyToMany(() => PokemonEntity, (pokemon) => pokemon.trainers, { nullable: false })
  @JoinTable()
    pokemons: PokemonEntity[];

  @CreateDateColumn()
    created_at?: Date;

  public toPlainClass (): Trainer {
    return new Trainer(
      {
        name: this.name,
        email: this.email,
        password: this.password,
      },
      this.id,
    );
  }
}
