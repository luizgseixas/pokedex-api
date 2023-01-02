interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonsListModel {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}
