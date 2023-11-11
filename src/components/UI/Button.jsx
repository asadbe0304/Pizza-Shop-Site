import "./style.scss";
const Button = ({ text, style, click, type}) => {
  return (
    <>
      <button onClick={click} type={type} className={`button dark:text-white text-white  ${style}`}>
        {text}
      </button>
    </>
  );
};

export default Button;
