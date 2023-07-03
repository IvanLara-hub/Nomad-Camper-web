import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faVimeoV,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import { logout } from "../../stores/AccessTokenStore";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="logo-widget">
              <figure className="logo-box">
                <img
                  src="https://www.soulcamper.com/wp-content/uploads/elementor/thumbs/icono-equipamiento-occn4zs8h7iz62dorekfalw2097zfe4bb9q2d58548.png"
                  alt="icono-equipamiento"
                  width="20"
                  height="1 0"
                />
                <img
                  src="https://www.soulcamper.com/wp-content/uploads/elementor/thumbs/icono-para_todos-occn54hffdpes46uzylk52pcz6kthvmyzwzhrj1694.png"
                  alt="icono-para_todos"
                  width="50"
                  height="50"
                />
                <img
                  src="https://www.soulcamper.com/wp-content/uploads/elementor/thumbs/icono-hogar-occn596mdjvue6018imozjiny3xnkd5mok8x5wu7e0.png"
                  alt="icono-hogar"
                  width="50"
                  height="50"
                />
                <img
                  src="https://www.soulcamper.com/wp-content/uploads/elementor/thumbs/icono-satisfaccion-occn4u57c7b98elvoc4nvnbafxzs57hxaht5hhgi5k.png"
                  alt="icono-satisfaccion"
                  width="50"
                  height="50"
                />
              </figure>
              <div className="text">
                <p>
                  ¡Descubre nuevas aventuras con nosotros! Somos expertos en
                  camperización de vehículos y te ofrecemos las mejores
                  soluciones para que disfrutes de tus escapadas al aire libre.
                </p>
              </div>
              <ul className="list-unstyled list-inline social-media">
                <li className="list-inline-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faVimeoV} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faGooglePlusG} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="service-widget">
              <h4 className="mb-4">Nuestros servicios</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Camperización de vehículos</a>
                </li>
                <li>
                  <a href="#">Mantenimiento y reparación</a>
                </li>
                <li>
                  <a href="#">Alquiler de autocaravanas</a>
                </li>
                <li>
                  <a href="#">Venta de accesorios</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-widget">
              <h4 className="mb-4">Contacto</h4>
              <p>info@NomadCamper.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">
                © 2023 Nomad Camper. Todos los derechos reservados.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#">Términos y condiciones</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Política de privacidad</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
