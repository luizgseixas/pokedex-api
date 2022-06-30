import { IMove } from '@src/domain/adapters/responses';

export const movesFilter = (moves: IMove[]) => {
  const filteredMoves = moves.map((move) => move.move);
  return filteredMoves;
};
