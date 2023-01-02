import { Move } from '@src/domain/adapters/responses';

export const movesFilter = (moves: Move[]) => {
  const filteredMoves = moves.map((move) => move.move);
  return filteredMoves;
};
