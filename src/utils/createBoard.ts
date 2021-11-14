import { constants } from "../constants/constants";
import { BoardOfStackType } from "../types/types";
import { getRandomNumberForRGB } from "./getRandomNumberForRGB";
import { Stack } from "./stack";

export const createBoard = (numberOfBricks: number): BoardOfStackType => {
  const filledFirstStack = new Stack(numberOfBricks); 
  let stickSize = constants.NUMBER_OF_BRICKS;

  for (let i = 0; i < numberOfBricks; i++) {
    filledFirstStack.push({
      width: constants.SIZE_OF_BRICK_PART * stickSize,
      color: `rgb(${getRandomNumberForRGB()}, ${getRandomNumberForRGB()}, ${getRandomNumberForRGB()})`
    });
    stickSize--;
  }

  return [filledFirstStack, new Stack(numberOfBricks), new Stack(numberOfBricks)];
};
