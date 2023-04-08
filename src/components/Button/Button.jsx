const Button = ({ text, onClickFn }) => {
  return (
    <button className="btn btn-primary" onClick={onClickFn}>
      {text}
    </button>
  );
};

export default Button;
