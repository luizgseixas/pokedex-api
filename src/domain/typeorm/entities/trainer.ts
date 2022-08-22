import { Pokemon } from './pokemon';

export class Trainer {
  constructor (data?: Omit<Trainer, 'id'>, id?: string) {
    if (data) Object.assign(this, data);
    if (id) this.id = id;
  }

  id: string;
  name: string;
  email: string;
  password: string;
  pokemons?: Pokemon[];
  created_at?: Date;
}
