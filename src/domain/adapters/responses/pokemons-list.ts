export interface IPokemonListResponse {
  count: number;
  next: string;
  previus: string;
  results: IPokemonList[];
}

export interface IPokemonList {
  name: string;
  url: string;
}
