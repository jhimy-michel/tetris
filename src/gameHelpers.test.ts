import { createStage, STAGE_HEIGHT, STAGE_WIDTH } from "./gameHelpers";

describe("Game helper test cases", () => {
  it("should create the stage", () => {
    const response: [number,string][][] = createStage();

    expect(response.length).toBe(STAGE_HEIGHT);
    expect(response[0].length).toBe(STAGE_WIDTH);
    
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
