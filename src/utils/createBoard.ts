import { constants } from "../constants/constants";
import { BoardType } from "../types/types";
import { getRandomNumberForRGB } from "./getRandomNumberForRGB";

export const createBoard = (numberOfBricks: number): BoardType => {
  const filledFirstStick = Array.from(
    { length: numberOfBricks },
    (_, index) => ({
      width: (index + 1) * constants.SIZE_OF_BRICK_PART,
      color: `rgb(${getRandomNumberForRGB()}, ${getRandomNumberForRGB()}, ${getRandomNumberForRGB()})`,
    })
  );

  return [[...filledFirstStick], [], []];
};
