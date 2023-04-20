import { PokemonModel } from '../pokemon';

export class TrainerModel {
  constructor (data?: Omit<TrainerModel, 'id'>, id?: string) {
    if (data) Object.assign(this, data);
    if (id) this.id = id;
  }

  id: string;
  name: string;
  email: string;
  password: string;
  auth_token?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  pokemons?: PokemonModel[];
}
