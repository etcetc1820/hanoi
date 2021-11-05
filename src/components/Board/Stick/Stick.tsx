import React from "react";
import styles from "./stick.module.scss";

type StickProps = {
  stickHeight: number;
  click: (index: number) => void;
  index: number;
  selectedStick: null | number;
};

const Stick: React.FC<StickProps> = ({
  children,
  stickHeight,
  click,
  index,
  selectedStick,
}) => {
  return (
    <div
      style={{
        height: `${stickHeight}px`,
        opacity: selectedStick === index ? 0.5 : 1,
      }}
      className={styles.stickWrapper}
      onClick={() => click(index)}
    >
      {children}
      <div className={styles.stick} />
    </div>
  );
};

export default Stick;
