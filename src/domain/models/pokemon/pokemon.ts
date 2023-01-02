export class Pokemon {
  constructor (data?: Omit<Pokemon, 'id'>, id?: string) {
    if (data) Object.assign(this, data);
    if (id) this.id = id;
  }

  id: string;
  name: string;
  heigth: number;
  weight: number;
  location_area: string;
  sprite_front_default: string;
  sprite_front_female: string;
  sprite_front_shiny: string;
  sprite_front_shiny_female: string;
  sprite_back_default: string;
  sprite_back_female: string;
  sprite_back_shiny: string;
  sprite_back_shiny_female: string;
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  created_at?: Date;
}
