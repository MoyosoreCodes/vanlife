import "./Van.css";
import { FC } from "react";
import { VanProps, VanTypeColorMap } from "../types/van";
import Chip from "../../../components/chip/Chip";

const Van: FC<VanProps> = ({ imageUrl, name, type, price, onClick }) => {
  return (
    <section className="van-item" onClick={onClick}>
      <img src={imageUrl} alt="van_image" />
      <div className="description">
        <p>{name}</p>
        <div className="price">
          ${price} <p className="extra">/day</p>
        </div>
      </div>
      <Chip text={type} background={VanTypeColorMap[type]}/>
    </section>
  );
};

export default Van;
