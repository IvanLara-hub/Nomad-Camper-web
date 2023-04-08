import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const CamperCard = ({
  slug,
  category,
  name,
  img,
  equipment,
  description,
  compatibleVehicles,
  price,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>{name}</h1>
      <p>Category: {category}</p>
      <img src={img} alt={name} />
      <div>
        <Button text="detalle" onClickFn={() => navigate(`/campers/${slug}`)} />
      </div>

      {/* <p>{description}</p>
      <p>Equipment: {equipment}</p>
      <p>Compatible vehicles: {compatibleVehicles.join(", ")}</p>
      <p>Price: {price} €</p> */}
    </div>
  );
};

export default CamperCard;
