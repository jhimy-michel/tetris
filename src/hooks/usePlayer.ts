import { useState, useCallback } from "react";

import { TRETOMINOS, randomTetromino } from "../tetrominos";
import { checkCollision, STAGE_WIDTH } from "../gameHelpers";

type PlayerPosition = {
  x: number;
  y: number;
};

export type PlayerType = {
  pos: PlayerPosition;
  tetramino: any[][];
  collided: boolean;
};

export type UpdatePosType = {
  x: number;
  y: number;
  collided: boolean;
};

export function usePlayer(): [
  PlayerType,
  ({ x, y, collided }: UpdatePosType) => void,
  () => void,
  (x: any, y: any) => void
] {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetramino: TRETOMINOS[0].shape,
    collided: false
  });

  const rotate = (matrix: any, dir: number) => {
    // make the rows to become cols (transpose matrix)
    const rotatedTetro = matrix.map((x: any, index: number) => matrix.map((col: any) => col[index]));

    // reverse each row to get a rotated matrix
    if (dir < 0) return rotatedTetro.map((row: any) => row.reverse());
    return rotatedTetro.reverse();
  };

  const playerRotate = (stage: any, direction: number) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));

    clonedPlayer.tetramino = rotate(clonedPlayer.tetramino, direction);
    console.log(clonedPlayer);

    const pos = clonedPlayer.pos.x;
    let offSet = 1;

    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pox.x += offSet;
      offSet = -(offSet + (offSet > 0 ? 1 : -1));
      if (offSet > clonedPlayer.tetramino[0].length) {
        rotate(clonedPlayer.tetramino, -direction);

        clonedPlayer.pos.x = pos;

        return;
      }
    }

    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }: UpdatePosType) => {
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

  return [player, updatePlayerPos, resetPlayer, playerRotate];
}
