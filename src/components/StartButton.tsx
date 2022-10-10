import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

/**
 * Button that start the game
 * @param param0 
 * @returns 
 */
const StartButton = ({ callBack }: { callBack: () => void }) => (
  <StyledStartButton onClick={callBack}>Start Game</StyledStartButton>
);

export default StartButton;
