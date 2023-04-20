import "./Gallery.css";

const Gallery = () => {
  const images = [
    
    "https://res.cloudinary.com/dbwcyzpiu/image/upload/v1681872007/Nomad-Camper/gallery/pexels-alex-azabache-4171211_xjlkly.jpg",
    "https://res.cloudinary.com/dbwcyzpiu/image/upload/v1681872095/Nomad-Camper/gallery/pexels-pnw-production-9354590_n90flj.jpg",
    "https://res.cloudinary.com/dbwcyzpiu/image/upload/v1681872195/Nomad-Camper/gallery/pexels-taryn-elliott-4840210_pg4rek.jpg",
    "https://res.cloudinary.com/dbwcyzpiu/image/upload/v1681872292/Nomad-Camper/gallery/pexels-taryn-elliott-4840208_ytw8ap.jpg",
    "https://res.cloudinary.com/dbwcyzpiu/image/upload/v1681872385/Nomad-Camper/gallery/pexels-pnw-production-9354628_rgw9yk.jpg",
    "https://res.cloudinary.com/dbwcyzpiu/image/upload/v1681872437/Nomad-Camper/gallery/pexels-koolshooters-8975578_pzlt19.jpg",
    "https://res.cloudinary.com/dbwcyzpiu/image/upload/v1681872538/Nomad-Camper/gallery/pexels-rodnae-productions-8230982_aaioz2.jpg",
    "https://res.cloudinary.com/dbwcyzpiu/image/upload/v1681872612/Nomad-Camper/gallery/pexels-gya-den-2303781_stfnen.jpg",
    "https://res.cloudinary.com/dbwcyzpiu/image/upload/v1681872668/Nomad-Camper/gallery/pexels-pnw-production-9354589_psuzwq.jpg",
    "https://res.cloudinary.com/dbwcyzpiu/image/upload/v1681872724/Nomad-Camper/gallery/pexels-rodnae-productions-8231247_ieyonf.jpg",
    "https://res.cloudinary.com/dbwcyzpiu/image/upload/v1681872829/Nomad-Camper/gallery/pexels-koolshooters-8975069_mtqm4c.jpg",
    "https://res.cloudinary.com/dbwcyzpiu/image/upload/v1681872897/Nomad-Camper/gallery/pexels-los-muertos-crew-8866068_ahu07r.jpg",
   
  ];
  return (
    <div>
      <div className="container gallery-container">
        <h2>Nuestros nómadas</h2>

        <p className="page-description text-center">
        La furgoneta es tu hogar, la naturaleza tu jardín.
        </p>

        <div className="tz-gallery">
          <div className="row">
            {images.map((url) => {
              return (
                <div className="img-gallery-container col-sm-4 col-md-4">
                  <img src={url} alt="Bridge" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
