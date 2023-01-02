export class PokemonModel {
  constructor (data?: Omit<PokemonModel, 'id'>, id?: string) {
    if (data) Object.assign(this, data);
    if (id) this.id = id;
  }

  id: string;
  name: string;
  document: string;
  email: string;
  password: string;
  created_at?: Date;
}
