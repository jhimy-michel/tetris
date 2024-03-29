import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TRETOMINOS } from "../tetrominos";

const Cell = ({ type }: { type: number | string }) => {
  return <StyledCell type={type} color={TRETOMINOS[type].color} />;
};

export default React.memo(Cell);
