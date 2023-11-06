import "./style.scss";
const Button = ({ text, style, click, type}) => {
  return (
    <>
      <button onClick={click} type={type} className={`button  ${style}`}>
        {text}
      </button>
    </>
  );
};

export default Button;
