export type PokemonsListModel = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

type Pokemon = {
  name: string;
}
