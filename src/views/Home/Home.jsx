import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import HomeBg from "./../../assets/camper-home.jpg";
import "./index.css";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Campers");
  };

  return (
    <div>
      <div
        className="home-caption"
        style={{ backgroundImage: 'url("./images/camper-home.jpg")' }}
      >
        <div className="home-caption-text-content">
          <img
            src="./images/logo-white.png"
            alt="My Image"
            style={{ top: "-1px", left: 0 }}
          />
          <h1>Nomad Camper</h1>
          <p>Tu furgoneta, tu hogar, tu aventura.</p>
        </div>
      </div>
      <div className="main-home-content">
        <div className="main-home-content-text">
          <p>
            En Nomad Camper nos dedicamos a transformar furgonetas en auténticas
            casas sobre ruedas. Ofrecemos diferentes opciones de camperización
            para adaptarnos a las necesidades de cada cliente, desde la
            camperización básica hasta diseños personalizados a medida.
          </p>
          <Button text="Ver campers" onClickFn={handleNavigate} />
        </div>
        <div className="main-home-content-images">
          <div className="main-home-content-img"></div>
          <div className="main-home-content-img"></div>
        </div>
      </div>

      <div className="main-home-content">
        <div className="main-home-content-images-1">
          <div className="main-home-content-img"></div>
          <div className="main-home-content-img"></div>
        </div>
        <div className="main-home-content-text">
          <p>
            "Descubre la libertad de viajar a tu aire. En Nomad Camper
            transformamos tu furgoneta en una casa móvil, adaptada a tus
            necesidades y estilo de vida."
          </p>
        </div>
      </div>

      <p>
        Además, en nuestro taller contamos con un equipo de profesionales
        altamente capacitados que se encargan de todos los aspectos de la
        camperización, desde la instalación de sistemas eléctricos hasta la
        fabricación de muebles y accesorios.
      </p>
      <Footer />
    </div>
  );
};

export default Home;
