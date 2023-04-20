import "./button.css";

const Button = ({ text, onClickFn }) => {
  return (
    <button className="btn btn-terra-c1" onClick={onClickFn}>
      {text}
    </button>
  );
};

export default Button;


