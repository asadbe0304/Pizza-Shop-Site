import "./style.scss";
const Button = ({ text, style }) => {
  return (
    <>
      <button className={`button  ${style}`}>{text}</button>
    </>
  );
};

export default Button;
