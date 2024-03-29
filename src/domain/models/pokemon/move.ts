import { PokemonModel } from './pokemon';

export class MoveModel {
  constructor (data?: Omit<MoveModel, 'id'>, id?: string) {
    if (data) Object.assign(this, data);
    if (id) this.id = id;
  }

  id?: string;
  name: string;
  pokemon?: PokemonModel[];
}
