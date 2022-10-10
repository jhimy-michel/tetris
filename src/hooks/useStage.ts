import { useState, useEffect } from "react";

import { createStage } from "../gameHelpers";
import { PlayerType } from "./usePlayer";

export const useStage = (
  player: PlayerType,
  resetPlayer: any
): [[number, string][][], React.Dispatch<React.SetStateAction<[number, string][][]>>, number] => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = (newStage: any[][]) =>
      newStage.reduce((acc: any, row: any) => {
        if (row.findIndex((cell: any) => cell[0] === 0) === -1) {
          setRowsCleared((prev) => prev + 1);
          acc.unshift(new Array(newStage[0].length).fill([0, "clear"]));
          return acc;
        }
        acc.push(row);
        return acc;
      }, []);

    const updateStage = (prevStage: any[]) => {
      // first flush the stages
      const newStage = prevStage.map((row) => row.map((cell: string[]) => (cell[1] === "clear" ? [0, "clear"] : cell)));
      
      // draw the tetromino
      player.tetramino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [value, `${player.collided ? "merged" : "clear"}`];
          }
        });
      });

      // then check if we collided
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }
      
      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared];
};
