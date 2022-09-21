import { useState, useEffect } from 'react';

import { createStage } from '../gameHelpers';
import { PlayerType } from './usePlayer';

export const useStage = (player: PlayerType, resetPlayer?: undefined): [any[][], React.Dispatch<React.SetStateAction<any[][]>>] => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = (prevStage: any[]) => {
      // first flush the stage
      const newStage = prevStage.map((row) => row.map((cell: string[]) => (cell[1] === 'clear' ? [0, 'clear'] : cell)));
      // draw the tetromino
      player.tetramino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [value, `${player.collided ? 'merged' : 'clear'}`];
          }
        });
      });
      return newStage;
    };
    setStage((prev) => updateStage(prev));
  }, [player]);

  return [stage, setStage];
};
