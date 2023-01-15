import { PokemonModel } from './pokemon';

export class TypeModel {
  constructor (data?: Omit<TypeModel, 'id'>, id?: string) {
    if (data) Object.assign(this, data);
    if (id) this.id = id;
  }

  id?: string;
  name: string;
  pokemon?: PokemonModel[];
}
