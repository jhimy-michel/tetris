import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TRETOMINOS } from "../tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TRETOMINOS[type].color}/>
);
export default Cell;
