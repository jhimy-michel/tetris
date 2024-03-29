import { PlayerType } from "./hooks/usePlayer";

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

/**
 * Create 2D array and fill it out with 0
 * @returns
 */
export const createStage = () => Array.from(Array(STAGE_HEIGHT), () => new Array(STAGE_WIDTH).fill([0, "clear"]));

/**
 * Check if the tetromino collided with something
 * @param player
 * @param stage
 * @param param2
 * @returns
 */
export const checkCollision = (player: PlayerType, stage: [number|string, string][][], { x: moveX, y: moveY }: { x: number, y: number }) => {

  // Using for loops to be able to return (and break).
  for (let y = 0; y < player.tetramino.length; y += 1) {
    for (let x = 0; x < player.tetramino[y].length; x += 1) {
      // 1. Check that we're on an actual Tetromino cell
      if (player.tetramino[y][x] !== 0) {
        if (
          // 2. Check that our move is inside the game areas height (y)
          // That we're not go through bottom of the play area
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that our move is inside the game area width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check that the cell wer'e moving to isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== "clear"
        ) {
          return true;
        }
      }
    }
  }
  // 5. If everything above is false
  return false;
};
