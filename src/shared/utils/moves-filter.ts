import { Move } from '@src/data/contracts/apis/responses';

export const movesFilter = (moves: Move[]) => {
  const filteredMoves = moves.map((move) => move.move);
  return filteredMoves;
};
