import React from "react";
import styles from "./brick.module.scss";

type BrickProps = {
  width: number;
  height: number;
  background: string;
};

const Brick: React.FC<BrickProps> = ({ width, height, background }) => {
  return <div className={styles.brick} style={{ width, height, background }} />;
};

export default Brick;
