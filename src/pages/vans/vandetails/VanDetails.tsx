import "./VanDetails.css";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LeftArrow from "../../../components/svgs/LeftArrow";
import Chip from "../../../components/chip/Chip";
import Button from "../../../components/button/Button";
import { VanItem, VanTypeColorMap } from "../types/van";

const VanDetails: FC<VanItem> = () => {
  const navigate = useNavigate();
  const { vanId } = useParams();

  const [vanDetail, setVanDetail] = useState<VanItem>();
  const [loading, setLoading] = useState(false);

  function goBack() {
    navigate("/vans");
  }

  function fetchVanDetails(vanId: string | undefined) {
    if (!vanId) return;
    setLoading(true);
    const url = `/api/vans/${vanId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setVanDetail(data?.vans);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchVanDetails(vanId);
  }, []);

  return (
    <section className="van-details-container">
      <span className="previous" onClick={goBack}>
        <LeftArrow />
        <p>Back to all vans</p>
      </span>

      <div className="van-detail">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div className="items">
            <img
              src={vanDetail?.imageUrl}
              alt="van_image"
              className="van-image"
            />
            <div className="description">
              <Chip
                text={vanDetail?.type}
                background={VanTypeColorMap[vanDetail?.type]}
              />
              <p className="name">{vanDetail?.name}</p>
              <span className="price">
                ${vanDetail?.price} <p className="extra">/day</p>
              </span>

              <p className="description">{vanDetail?.description}</p>

              <Button className="rent-btn">Rent this van</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VanDetails;
