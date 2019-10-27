import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TRETOMINOS } from "../tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={'L'} color={TRETOMINOS['L'].color}/>
);
export default Cell;
