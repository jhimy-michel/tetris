import { createStage } from "./gameHelpers";

describe("Game helper test cases", () => {
  it("should return an 2D aray", () => {
    const response: [number, string][][] = createStage();

    expect(response[0]).toStrictEqual([
      [0, "clear"],
      [0, "clear"],
      [0, "clear"],
      [0, "clear"],
      [0, "clear"],
      [0, "clear"],
      [0, "clear"],
      [0, "clear"],
      [0, "clear"],
      [0, "clear"],
      [0, "clear"],
      [0, "clear"]
    ]);
  });

  // TODO: add test for collision detection here
});
