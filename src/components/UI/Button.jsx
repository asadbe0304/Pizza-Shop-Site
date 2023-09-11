import "./style.scss";
const Button = ({ text, style, click, }) => {
  return (
    <>
      <button onClick={click} className={`button  ${style}`}>
        {text}
      </button>
    </>
  );
};

export default Button;
