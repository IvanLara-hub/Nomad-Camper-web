import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { getCamperBySlug } from "../../services/CampersService";
import "./CamperDetail.css";
import { Carousel } from "react-bootstrap";

const CamperDetail = () => {
  const [camper, setCamper] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCamperBySlug(params.slug)
      .then((camperData) => {
        console.log("camperData", camperData);
        setCamper(camperData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="CamperDetailCard">
      {camper && (
        <>
          <h1>{camper.name}</h1>
          <Carousel>
            {camper.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={image} alt={image} />
              </Carousel.Item>
            ))}
          </Carousel>
              
          <div className="CamperDetailCard-footer">
            <div>
              <ul className="equip-list">
                {camper.equipment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
  
              <p>Precio: {camper.price} €</p>
            </div>
            <div>
              <Button
                text="Configura tu camper"
                onClickFn={() => navigate(`/campers/${params.slug}/extras`)}
              />
            </div>
          </div>
  
          <p>Este paquete incluye {camper.extras.length} extras</p>
        </>
      )}
    </div>
  );
  
};

export default CamperDetail;
