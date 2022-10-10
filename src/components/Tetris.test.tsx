import { render } from '@testing-library/react';
import Tetris from "./Tetris";

describe("Testing Tetrix main component", () => {
  it("should match snapshot", () => {
    const view = render(<Tetris />);
    expect(view.container).toMatchSnapshot();
  });
});
