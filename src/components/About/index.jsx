import "./index.scss";
import Img from "./../../assets/gr.png";
import Img2 from "./../../assets/herobanner.webp";
const index = () => {
  return (
    <>
      <div className="container">
        <div className="lg:flex-row mt-12 2xl:flex-row flex-col-reverse xl:flex-row md:flex-col items-center lg:flex xl:flex 2xl:flex  w-full">
          <div className="about-right  w-full lg:w-1/2 2xl:w-1/2">
            <img src={Img2} alt="about pizza images" width={450} />
          </div>
          <div className="about-left w-full xl:w-1/2 lg:w-1/2 2xl:w-1/2">
            <div>
              <h4 className="about__left--title">About Us</h4>
              <p className="left__text">
                In just a couple of years, we have opened 6 outlets in different
                cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the
                future we plan to develop the network in other major cities of
                Russia.
              </p>
            </div>
            <div>
              <img src={Img} alt="images gr" />
            </div>
            <div className="left__text">
              The kitchen of each point is at least: 400-500 sq. m. meters,
              hundreds of employees, smoothly performing work in order to
              receive / prepare / form / deliver customer orders on time.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
