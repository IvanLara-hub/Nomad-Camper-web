import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./CamperCard.css";

const CamperCard = ({
  slug,
  category,
  name,
  img,
  images,
  equipment,
  description,
  compatibleVehicles,
  price,
}) => {
  const navigate = useNavigate();

  return (
    <div className="CamperCard">
      <div className="CamperCard__img-wrapper">
        <img src={img} alt={img} className="w-100" />
      </div>
      <div className="CamperCard__content">
        <h2 className="CamperCard__title">{name}</h2>
        <p className="CamperCard__category">Category: {category}</p>
        <Button
          text="Equipación"
          onClickFn={() => navigate(`/campers/${slug}`)}
          className="CamperCard__button"
        />
      </div>
    </div>
  );
};

export default CamperCard;
