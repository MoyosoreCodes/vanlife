import "./Van.css";
import { FC } from "react";
import { VanProps } from "../types/Van";
import Chip from "../../../components/chip/Chip";

const VanTypeColorMap = {
  "simple": "#E17654",
  "rugged": "#115E59",
  "luxury": "#161616"
}

const Van: FC<VanProps> = ({ imageUrl, name, type, price }) => {
  return (
    <section className="van-item">
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
