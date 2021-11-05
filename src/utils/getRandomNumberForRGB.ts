import { constants } from "../constants/constants";

export const getRandomNumberForRGB = (): number =>
  Math.floor(Math.random() * (constants.MAX_RGB - constants.MIN_RGB)) +
  constants.MIN_RGB;
