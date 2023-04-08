import "./ExtraCard.css";

const ExtraCard = ({ name, img, description, price, onClickFn, selected }) => {
  return (
    <div
      onClick={onClickFn}
      className={`ExtraCard ${selected ? "selected" : ""}`}
    >
      <img src={img} style={{ width: "100px" }} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default ExtraCard;
