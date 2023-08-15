import "./Chip.css";
import { FC } from "react";

const Chip: FC<{
  background: string;
  text: string;
}> = ({ background, text }) => {
  return (
    <span style={{ background }} className="app-chip">
      {text}
    </span>
  );
};

export default Chip;
