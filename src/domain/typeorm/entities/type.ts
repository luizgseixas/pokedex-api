import { Pokemon } from './pokemon';

export class Type {
  constructor (data?: Omit<Type, 'id'>, id?: string) {
    if (data) Object.assign(this, data);
    if (id) this.id = id;
  }

  id: string;
  name: string;
  url: string;
  pokemon?: Pokemon[];
}
