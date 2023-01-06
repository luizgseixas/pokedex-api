import { SpeciesResponse } from '@src/data/contracts/apis';

export const mockSpecies = (): SpeciesResponse => ({
  id: 1,
  name: 'any_name',
  color: { name: 'any_name', url: 'any_url' },
  base_happiness: 1,
  capture_rate: 1,
  habitat: { name: 'any_name', url: 'any_url' },
  has_gender_differences: false,
  is_baby: false,
  evolution_chain: { url: 'any_url/evolution-chain/1' },
});
