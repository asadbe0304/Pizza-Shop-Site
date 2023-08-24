import Img from "./../../../public/images/hero.png";
import Svg from "./../../../public/images/polygon-1.svg";
import Svg2 from "./../../../public/images/elip.svg";
import Img1 from "./../../../src/assets/laugh-wink.png";
import Img2 from "./../../../src/assets/love.png";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { modalOpen } from "../../slice/auth";
const LeftSection = () => {
  const dispatch = useDispatch();
  const open = () => {
    dispatch(modalOpen());
  };
  return (
    <>
      <div className="hero__left">
        <h2 className="hero__title">
          <span className="flex items-center gap-6 text-red-600">
            We Love
            <img src={Img2} width={"60px"} height={"60px"} alt="love icon" />
          </span>
          <span className="flex items-center gap-4 text-yellow-600">
            Your Smile
            <img src={Img1} width={"60px"} height={"60px"} alt="smile icon" />
          </span>
        </h2>
        <p className="hero__left--text">
          We will deliver juicy Chicken and Pizza for your family in 30 minutes,
          if the courier is late - pizza is free!
        </p>
        <strong className="text-white process_title">Cooking Process:</strong>
        <div className="cooking__process  relative">
          <img
            src={Img}
            alt="Cooking process"
            width={"272px"}
            height={"194px"}
          />
          <div>
            <img
              src={Svg}
              onClick={open}
              className="absolute cursor-pointer icon-play animate-ping"
              alt="polygon svg icon"
            />
            <img
              onClick={open}
              src={Svg2}
              className="elipsis cursor-pointer animate-ping"
              width={"80px"}
              height={"80px"}
              alt="polygon svg icon"
            />
          </div>
        </div>
        <div className="btn_gruop">
          <Button text={"To Order"}></Button>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
