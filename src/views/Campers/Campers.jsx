import React, { useState } from "react";
import { useEffect } from "react";
import CamperCard from "../../components/Campers/CamperCard";
import { getCampers } from "../../services/CampersService";
import "./Campers.css";

function Campers({}) {
  const [campers, setCampers] = useState([]);

  useEffect(() => {
    // la peticion
    getCampers()
      .then((allCampers) => {
        console.log(allCampers);
        setCampers(allCampers);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="campers-container">
      <h1 className="campers-title"></h1>
      <div className="campers-grid">
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
    </div>
  );
}

export default Campers;
