import Img from "./../../../public/images/pizzaa2.png";
import Img2 from "./../../../public/images/piza.png";
import Img3 from "./../../../public/images/fris.png";
const RightSection = () => {
  return (
    <>
      <div className="hero__right ">
        <img src={Img2} alt="pizza one piece images" className="absolute  pizza z-10" />
        <img src={Img} width={"450px"} height={"683px"} alt="hero pizza images" />
        <img src={Img3} width={"212px"} className="fries" height={"226px"} alt="hero fries images" />
      </div>
    </>
  );
};

export default RightSection;
