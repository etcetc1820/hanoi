import { useState } from "react";
import Brick from "./Brick/Brick";
import Stick from "./Stick/Stick";
import { constants } from "../../constants/constants";
import { createBoard } from "../../utils/createBoard";
import { BrickType } from "../../types/types";
import styles from "./board.module.scss";

const Board = () => {
  const [board, setBoard] = useState<BrickType[][]>(
    createBoard(constants.NUMBER_OF_BRICKS)
  );
  const [isBrickSelected, setIsBrickSelected] = useState(false);
  const [selectedStick, setSelectedStick] = useState<null | number>(null);

  const clickHandler = (stickIndex: number) => {
    if (board[stickIndex].length === 0 && !isBrickSelected) {
      return;
    }

    if (!isBrickSelected) {
      setSelectedStick(stickIndex);
      setIsBrickSelected(true);
      return;
    }

    if (
      isBrickSelected &&
      typeof selectedStick === "number" &&
      selectedStick !== stickIndex
    ) {
      const stickWhereGetBrick = [...board[selectedStick]];
      const removedBrick = stickWhereGetBrick.shift();

      if (removedBrick && removedBrick.width > board[stickIndex]?.[0]?.width) {
        alert("читаем правила!");
        setSelectedStick(null);
        setIsBrickSelected(false);
        return;
      }

      if (removedBrick && selectedStick !== stickIndex) {
        const updatedBoard = [...board];
        const stickWhereMoveBrick = [...board[stickIndex]];

        stickWhereMoveBrick.unshift(removedBrick);
        updatedBoard[selectedStick] = [...stickWhereGetBrick];
        updatedBoard[stickIndex] = [...stickWhereMoveBrick];

        setSelectedStick(null);
        setIsBrickSelected(false);
        setBoard([...updatedBoard]);
      }
    }
  };

  return (
    <div className={styles.board}>
      {board.map((stick, index) => {
        return (
          <Stick
            key={index}
            index={index}
            stickHeight={constants.STICK_HEIGHT}
            click={clickHandler}
            selectedStick={selectedStick}
          >
            {stick.map(({ width, color }, index) => {
              return (
                <Brick
                  key={index}
                  height={constants.BRICK_HEIGHT}
                  width={width}
                  background={color}
                />
              );
            })}
          </Stick>
        );
      })}
    </div>
  );
};

export default Board;
