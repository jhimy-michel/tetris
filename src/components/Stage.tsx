import React from 'react';
import Cell from './Cell';
import { StyledStage } from './styles/StyleStage';

const Stage = ({ stage }: { stage: any }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map((row: any) =>
      row.map((cell: any[], x: React.Key | null | undefined) => <Cell key={x} type={cell[0]} />)
    )}
  </StyledStage>
);
export default Stage;
