export interface PokemonsListModel {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

interface IPokemon {
  name: string;
  url: string;
}
