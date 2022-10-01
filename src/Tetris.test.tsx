import { render, screen } from '@testing-library/react';
import Tetris from "./components/Tetris";

describe("Testing Tetrix main component", () => {
  it("it should render the game", () => {
    const view = render(<Tetris />);
    console.log(view.container)

    expect(view.container).toMatchSnapshot();
  });
});
