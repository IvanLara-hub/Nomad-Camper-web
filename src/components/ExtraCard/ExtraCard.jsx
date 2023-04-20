import "./ExtraCard.css";

const ExtraCard = ({ name, img, description, price, onClickFn, selected }) => {
  return (
    <div
      onClick={onClickFn}
      className={`ExtraCard ${selected ? "selected" : ""}`}
    >
      <img src={img} alt={name} />
      <div className="ExtraCard__content">
        <h2>{name}</h2>
        <p className="text-start">{description}</p>
        <p className="text-start">{price}</p>
      </div>
    </div>
  );
};

export default ExtraCard;
