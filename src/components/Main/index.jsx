import "./index.scss";
import Left from "./LeftSection";
import Right from "./RightSection";
import Menu from "./../Menu";
import Modal from "./Modal";
const index = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="hero">
            <Modal />
            <div className="hero__inner">
              <Left />
              <Right />
            </div>
            <Menu />
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
