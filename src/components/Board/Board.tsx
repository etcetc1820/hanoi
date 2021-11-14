import React, { useState } from "react";
import Brick from "./Brick/Brick";
import Stick from "./Stick/Stick";
import { constants } from "../../constants/constants";
import { createBoard } from "../../utils/createBoard";
import { BoardOfStackType } from "../../types/types";
import styles from "./board.module.scss";

let startingStick = 0;

const Board: React.FC = () => {
  const [board] = useState<BoardOfStackType>(
    createBoard(constants.NUMBER_OF_BRICKS)
  );

  const [isBrickSelected, setIsBrickSelected] = useState(false);
  const [selectedStick, setSelectedStick] = useState<null | number>(null);

  const clickHandler = (stickIndex: number): void => {
    if (board[stickIndex].isEmpty() && !isBrickSelected) {
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
      const stickWhereGetBrick = board[selectedStick];
      const removedBrick = board[selectedStick].peek();
      const peekedBrick = !board[stickIndex].isEmpty() ? board[stickIndex].peek() : undefined;
      
      if (removedBrick && peekedBrick && removedBrick.width > peekedBrick.width) {
        alert("читаем правила!");
        setSelectedStick(null);
        setIsBrickSelected(false);
        return;
      }

      if (removedBrick && selectedStick !== stickIndex) {
        const stickWhereMoveBrick = board[stickIndex];

        stickWhereMoveBrick.push(removedBrick);
        stickWhereGetBrick.pop();

        setSelectedStick(null);
        setIsBrickSelected(false);
      }

      if (stickIndex !== startingStick && board[stickIndex].isFull()) {
        alert('Krasava!');
        startingStick = stickIndex;
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
            {stick.getStore().map((item, index) => {
              if (item === null) {
                return;
              }

              const { width, color } = item;
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
