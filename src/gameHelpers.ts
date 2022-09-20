export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

/**
 * Create 2D array and fill it out with 0
 * @returns
 */

export const createStage = () => Array.from(Array(STAGE_HEIGHT), () => new Array(STAGE_WIDTH).fill([0, 'clear']));
