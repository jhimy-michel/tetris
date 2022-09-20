import { useState, useCallback } from 'react';

import { TRETOMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH } from '../gameHelpers';

type PlayerType = {
  pos: {
    x: number;
    y: number;
  };
  tetramino: any[][];
  collided: boolean;
};
export function usePlayer(): Array<PlayerType | ((x: any) => void) | (() => void)> {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetramino: TRETOMINOS[0].shape,
    collided: false
  });

  const updatePlayerPos = ({ x, y, collided }: { x: number; y: number; collided: boolean }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetramino: randomTetromino().shape,
      collided: false
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer];
}
