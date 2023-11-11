import Img from "./../../../public/images/pizzaa2.webp";
import Img3 from "./../../../public/images/fris.png";
import Img4 from "./../../assets/mobipizza.png";

const RightSection = () => {
  return (
    <>
      <div className="hero__right ">
        <img
          src={Img}
          width={"450px"}
          height={"683px"}
          className="desktop-img "
          alt="hero pizza images"
        />

        <img
          src={Img3}
          width={"212px"}
          className="fries"
          height={"226px"}
          alt="hero fries images"
        />
        <img
          src={Img4}
          width={"212px"}
          className="mobile-img mb-4"
          height={"226px"}
          alt="hero fries images"
        />
      </div>
    </>
  );
};

export default RightSection;
