import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { getCamperBySlug } from "../../services/CampersService";

const CamperDetail = () => {
  const [camper, setCamper] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCamperBySlug(params.slug)
      .then((camperData) => {
        setCamper(camperData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {camper && (
        <div>
          <h1>{camper.name}</h1>
          <p>{camper.description}</p>
          ...
          <div>
            <Button
              text="Configura tus extas"
              onClickFn={() => navigate(`/campers/${params.slug}/extras`)}
            />
          </div>

          Este paquete incluye {camper.extras.length} extras
        </div>
      )}
    </div>
  );
};

export default CamperDetail;
