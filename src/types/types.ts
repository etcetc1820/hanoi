import { Stack } from "../utils/stack";

export type BrickType = {
  width: number;
  color: string;
};

export type BoardType = BrickType[][];

export type BoardOfStackType = Stack[];
