import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import ExtraCard from "../../components/ExtraCard/ExtraCard";
import { getCamperBySlug } from "../../services/CampersService";

const CamperExtras = () => {
  const [camper, setCamper] = useState(null);
  const [finalPrice, setFinalPrice] = useState(0);
  const [selectedExtras, setSelectedExtras] = useState([]);

  const navigate = useNavigate();
  const params = useParams();

  const handleFinalPrice = (extraToAdd) => {
    const extraAlreadyExists = selectedExtras.find((extra) => {
      return extra._id === extraToAdd._id;
    }); // esto puede valer o undefined  o el exta encontrado

    if (extraAlreadyExists) {
      const filteredExtras = selectedExtras.filter(
        (extra) => extra._id !== extraAlreadyExists._id
      );
      setSelectedExtras(filteredExtras);
    } else {
      setSelectedExtras([...selectedExtras, extraToAdd]);
    }
  };

  useEffect(() => {
    getCamperBySlug(params.slug)
      .then((camperData) => {
        setCamper(camperData);
        setFinalPrice(camperData.price);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (camper) {
      const extrasTotalPrice = selectedExtras.reduce((acc, extra) => {
        return acc + extra.price;
      }, 0);

      setFinalPrice(camper.price + extrasTotalPrice);
    }
  }, [selectedExtras]);

  return (
    <div>
      <h1>esta es la vista de los extras.</h1>
      {camper &&
        camper.extras.map((extra) => {
          return (
            <ExtraCard
              selected={selectedExtras.find(
                (selectedExtra) => selectedExtra._id === extra._id
              )}
              img={extra.img}
              name={extra.name}
              description={extra.description}
              price={extra.price}
              key={extra._id}
              onClickFn={() => handleFinalPrice(extra)}
            />
          );
        })}
      <h1>total:{finalPrice}€</h1>

      <Button
        text="Ir a prespuesto"
        onClickFn={() =>
          navigate("/budget", {
            state: { camper: camper, selectedExtras: selectedExtras },
          })
        }
      />
    </div>
  );
};

export default CamperExtras;
