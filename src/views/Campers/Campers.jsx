import React, { useState } from "react";
import { useEffect } from "react";
import CamperCard from "../../components/Campers/CamperCard";
import { getCampers } from "../../services/CampersService";

function Campers({}) {
  const [campers, setCampers] = useState([]);

  useEffect(() => {
    // la peticion
    getCampers()
      .then((allCampers) => {
        setCampers(allCampers);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>esta será la vista campers</h1>
      {campers.map((camper) => {
        return (
          <CamperCard
            key={camper._id}
            slug={camper.slug}
            category={camper.category}
            name={camper.name}
            img={camper.img}
            equipment={[camper.equipment]}
            description={camper.description}
            compatibleVehicles={[camper.compatibleVehicles]}
            price={camper.price}
          />
        );
      })}
    </div>
  );
}

export default Campers;
