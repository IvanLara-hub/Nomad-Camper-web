import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SentEmail.css";

const SentEmail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 95000);
  }, []);

  return (
    <div className="sent-email">
      <h1>¡Correo electrónico enviado!</h1>
      <img src="/images/logo-negro.png" style={{ width: "100px" }}></img>
      <small className="logo text-small pt-2 pb-3" style={{ textAlign: "center" }}>
  Nomad Camper
</small>
      <p>
        Revisa tu bandeja de entrada para ver el correo electrónico que hemos
        enviado con tu presupuesto.
      </p>
      <button onClick={() => navigate("/")}>
        Volver a la página principal
      </button>
    </div>
  );
};

export default SentEmail;
