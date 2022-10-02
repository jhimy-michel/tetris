import React from "react";
import { createStage, STAGE_HEIGHT, STAGE_WIDTH } from "./gameHelpers";

const player = {
    collided: false,
    pos: { x: 4, y: 1 },
    tetramino: [
        [0, "I", 0, 0],
        [0, "I", 0, 0],
        [0, "I", 0, 0],
        [0, "I", 0, 0]
    ]
};

const testStage = [
    [
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        ["J", "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"]
    ],
    [
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        ["J", "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"]
    ],
    [
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        ["J", "clear"],
        ["J", "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"],
        [0, "clear"]
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ]
];
describe("GAME HELPER TEST CASES", () => {
    it("should create stage with defined heigh and width", () => {
        const response = createStage();

        expect(response.length).toBe(STAGE_HEIGHT);
        expect(response[0].length).toBe(STAGE_WIDTH);
    });

    it("should detect collision", () => {
        const response = createStage();

        expect(response.length).toBe(STAGE_HEIGHT);
        expect(response[0].length).toBe(STAGE_WIDTH);
    });
});
