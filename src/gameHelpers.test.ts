import { checkCollision, createStage, STAGE_HEIGHT, STAGE_WIDTH } from "./gameHelpers";
import { mockStage } from "./testUtils";

describe("Game helper test cases", () => {
  it("should create the stage", () => {
    const response: [number, string][][] = createStage();

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

  it("should detect collision", () => {
    const mockPlayer = {
      pos: { x: 4, y: 0 },
      tetramino: [
        [0, "L", 0],
        [0, "L", 0],
        [0, "L", "L"]
      ],
      collided: false
    };

    const mockStageData: [number|string, string][][] = mockStage;

    const response = checkCollision(mockPlayer, mockStageData, { x: -1, y: -2 });

    expect(response).toBeTruthy();
  });
});
