interface IPokemon {
  name: string;
  url: string;
}

export interface PokemonsListModel {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}
